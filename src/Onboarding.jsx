import { useEffect, useState } from 'react';
import Icon from './Icon';

const TYPES = [
  ['online', 'globe', 'Online business', 'Customers buy or book through your website'],
  ['store', 'store', 'Local store', 'Customers visit you in person'],
  ['service', 'briefcase', 'Service business', 'You travel to your customers'],
];
const TITLES = ['Name', 'Type', 'Category', 'Address', 'Map pin', 'Contact', 'Publish'];

const Field = ({ label, children }) => (
  <label className="block">
    <span className="block text-xs font-medium text-black/50 mb-1.5 ml-1">{label}</span>
    {children}
  </label>
);

const Row = ({ icon, text }) => text ? (
  <div className="flex items-start gap-2.5 text-sm text-black/65"><Icon name={icon} className="w-4 h-4 mt-0.5 shrink-0 text-brand" />{text}</div>
) : null;

export default function Onboarding({ onSave, onExit }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [category, setCategory] = useState('');
  const [addr, setAddr] = useState({ country: 'India', streetAddress: '', city: '', pincode: '', state: '' });
  const [contact, setContact] = useState({ phoneNumber: '', website: '', chatMethod: 'Text message', chatPhoneNumber: '' });
  const [prefs, setPrefs] = useState({ newsAndTips: false, surveysAndPilots: false });
  const [pin, setPin] = useState(null);
  const [pinState, setPinState] = useState('loading');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  // Look up the pin from the typed address (OpenStreetMap Nominatim).
  useEffect(() => {
    if (step !== 4) return;
    let off = false;
    setPin(null); setPinState('loading');
    const q = [addr.streetAddress, addr.city, addr.pincode, addr.state, addr.country].filter(Boolean).join(', ');
    fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q))
      .then((r) => r.json())
      .then((r) => { if (off) return; if (r[0]) { setPin({ lat: +r[0].lat, lon: +r[0].lon }); setPinState('ok'); } else setPinState('none'); })
      .catch(() => { if (!off) setPinState('none'); });
    return () => { off = true; };
  }, [step]); // eslint-disable-line

  const setA = (e) => setAddr({ ...addr, [e.target.name]: e.target.value });
  const setC = (e) => setContact({ ...contact, [e.target.name]: e.target.value });
  const back = () => (step === 0 ? onExit() : setStep(step - 1));
  const toggleType = (id) => setTypes(types.includes(id) ? types.filter((t) => t !== id) : [...types, id]);

  const submit = async (e) => {
    e.preventDefault();
    if (step < 6) return setStep(step + 1);
    setSaving(true); setError('');
    const res = await onSave({
      businessName: name, businessTypes: types, businessCategory: category,
      address: addr, contactDetails: contact, preferences: prefs, pin,
    });
    setSaving(false);
    if (res.ok) setDone(true); else setError(res.message);
  };

  if (done) {
    return (
      <main className="min-h-screen grid place-items-center px-6">
        <div className="glass rounded-[2rem] p-10 max-w-md text-center rise">
          <span className="mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-[#1590d0] to-brand text-white grid place-items-center shadow-lg shadow-brand/30"><Icon name="check" className="w-8 h-8" /></span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">Profile created</h2>
          <p className="mt-2 text-black/60"><b>{name}</b> is saved on Atkyn.</p>
          <button type="button" onClick={onExit} className="btn btn-primary mt-8">Done</button>
        </div>
      </main>
    );
  }

  const addrLine = [addr.streetAddress, addr.city, addr.state, addr.pincode].filter(Boolean).join(', ');
  return (
    <main className="min-h-screen px-4 pt-28 pb-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-5 px-2" role="progressbar" aria-valuenow={step + 1} aria-valuemax={7}>
          <div className="flex justify-between text-sm text-black/50 mb-2"><span>{TITLES[step]}</span><span>{step + 1} of 7</span></div>
          <div className="h-1.5 rounded-full bg-white/60 overflow-hidden"><div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${((step + 1) / 7) * 100}%` }} /></div>
        </div>

        <div className="glass rounded-[2rem] grid md:grid-cols-[minmax(0,1fr)_320px]">
          <form onSubmit={submit} className="p-7 md:p-12 flex flex-col gap-6">
            <button type="button" onClick={back} className="self-start -ml-1 inline-flex items-center gap-1.5 text-sm text-black/55 hover:text-black cursor-pointer"><Icon name="back" className="w-4 h-4" />Back</button>

            {step === 0 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">What's your business called?</h1>
              <Field label="Business name"><input className="field" required autoFocus value={name} onChange={(e) => setName(e.target.value)} /></Field>
            </>}

            {step === 1 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">How do customers reach {name || 'you'}?</h1>
              <p className="-mt-3 text-black/55">Select all that apply.</p>
              <div className="flex flex-col gap-3">
                {TYPES.map(([id, icon, t, d]) => {
                  const on = types.includes(id);
                  return (
                    <button type="button" key={id} aria-pressed={on} onClick={() => toggleType(id)} className={`flex items-center gap-4 p-4 rounded-2xl text-left border transition cursor-pointer ${on ? 'bg-brand/10 border-brand' : 'bg-white/50 border-white/80 hover:bg-white/80'}`}>
                      <span className={`w-11 h-11 rounded-xl grid place-items-center ${on ? 'bg-brand text-white' : 'bg-brand/10 text-brand'}`}><Icon name={icon} /></span>
                      <span className="flex-1"><b className="block font-medium">{t}</b><span className="text-sm text-black/55">{d}</span></span>
                      <span className={`w-6 h-6 rounded-full grid place-items-center ${on ? 'bg-brand text-white' : 'border border-black/15'}`}>{on && <Icon name="check" className="w-4 h-4" />}</span>
                    </button>
                  );
                })}
              </div>
            </>}

            {step === 2 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Choose a category</h1>
              <p className="-mt-3 text-black/55">Helps customers find you by industry. You can change it later.</p>
              <Field label="Business category"><input className="field" required autoFocus value={category} onChange={(e) => setCategory(e.target.value)} /></Field>
            </>}

            {step === 3 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Where can customers find you?</h1>
              <Field label="Country / Region">
                <select className="field" name="country" value={addr.country} onChange={setA}><option>India</option><option>United States</option><option>United Kingdom</option></select>
              </Field>
              <Field label="Street address"><input className="field" name="streetAddress" required value={addr.streetAddress} onChange={setA} /></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="City"><input className="field" name="city" required value={addr.city} onChange={setA} /></Field>
                <Field label="Pincode"><input className="field" name="pincode" required inputMode="numeric" value={addr.pincode} onChange={setA} /></Field>
              </div>
              <Field label="State"><input className="field" name="state" required value={addr.state} onChange={setA} /></Field>
            </>}

            {step === 4 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Check your pin</h1>
              <p className="-mt-3 text-black/55">Customers get directions to this spot. It's placed from your address.</p>
              <div className="h-72 rounded-3xl overflow-hidden bg-white/50 border border-white/80 grid place-items-center text-sm text-black/50">
                {pinState === 'ok' && pin && (
                  <iframe title="Business location" className="w-full h-full border-0"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${pin.lon - 0.006}%2C${pin.lat - 0.004}%2C${pin.lon + 0.006}%2C${pin.lat + 0.004}&layer=mapnik&marker=${pin.lat}%2C${pin.lon}`} />
                )}
                {pinState === 'loading' && 'Finding your address…'}
                {pinState === 'none' && <span className="px-6 text-center">We couldn't locate this address. Go back and check it, or continue without a pin.</span>}
              </div>
            </>}

            {step === 5 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">How can customers contact you?</h1>
              <p className="-mt-3 text-black/55">Optional. Shown on your listing.</p>
              <Field label="Phone number"><input className="field" type="tel" name="phoneNumber" value={contact.phoneNumber} onChange={setC} /></Field>
              <Field label="Website"><input className="field" type="url" name="website" placeholder="https://" value={contact.website} onChange={setC} /></Field>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <Field label="Chat via">
                  <select className="field" name="chatMethod" value={contact.chatMethod} onChange={setC}><option>Text message</option><option>WhatsApp</option></select>
                </Field>
                <Field label="Chat number"><input className="field" type="tel" name="chatPhoneNumber" value={contact.chatPhoneNumber} onChange={setC} /></Field>
              </div>
            </>}

            {step === 6 && <>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to publish</h1>
              <p className="-mt-3 text-black/55">Review your profile on the right, then choose what you'd like to hear from us.</p>
              {[['newsAndTips', 'Send me tips on improving my Business Profile'], ['surveysAndPilots', 'Invite me to occasional surveys and pilots']].map(([k, t]) => (
                <label key={k} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-[#0072B1]" checked={prefs[k]} onChange={(e) => setPrefs({ ...prefs, [k]: e.target.checked })} />
                  <span>{t}</span>
                </label>
              ))}
              <p className="text-xs text-black/45">By publishing, you agree to the Atkyn Business Profile Terms and Privacy Policy.</p>
              {error && <p role="alert" className="text-sm text-coral">{error}</p>}
            </>}

            <div className="flex gap-3 mt-2">
              {step === 5 && <button type="button" className="btn btn-glass" onClick={() => { setContact({ phoneNumber: '', website: '', chatMethod: 'Text message', chatPhoneNumber: '' }); setStep(6); }}>Skip</button>}
              <button type="submit" disabled={saving || (step === 1 && !types.length)} className="btn btn-primary">
                {step === 6 ? (saving ? 'Publishing…' : 'Publish profile') : 'Continue'}
                {step < 6 && <Icon name="arrow" className="w-4 h-4" />}
              </button>
            </div>
          </form>

          <aside className="hidden md:flex flex-col justify-center p-8 border-l border-white/70">
            <div className="glass-soft rounded-3xl p-6">
              <img src="/Atkyn.svg" alt="" className="h-5 w-auto mb-5 opacity-80" />
              <h3 className={`text-xl font-semibold tracking-tight break-words ${name ? '' : 'text-black/25'}`}>{name || 'Your business name'}</h3>
              <p className={`text-sm mt-1 ${category ? 'text-brand' : 'text-black/25'}`}>{category || 'Category'}</p>
              <div className="mt-5 flex flex-col gap-3">
                <Row icon="pin" text={addrLine} />
                <Row icon="phone" text={contact.phoneNumber} />
                <Row icon="globe" text={contact.website} />
                <Row icon="chat" text={contact.chatPhoneNumber && `${contact.chatMethod}: ${contact.chatPhoneNumber}`} />
                {types.length > 0 && <div className="flex flex-wrap gap-1.5 pt-1">{types.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-brand/10 text-brand">{TYPES.find((x) => x[0] === t)[2]}</span>)}</div>}
              </div>
            </div>
            <p className="text-xs text-black/40 text-center mt-4">Live preview of your profile</p>
          </aside>
        </div>
      </div>
    </main>
  );
              }
