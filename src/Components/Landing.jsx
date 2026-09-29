import { useState } from 'react';
import Icon from './Icon';

const img = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const PHOTOS = {
  hero: 'photo-1554118811-1e0d58224f24',
  restaurant: 'photo-1517248135467-4c7edcad34c4',
  retail: 'photo-1441986300917-64674bd600d8',
  salon: 'photo-1560066984-138dadb4c035',
  office: 'photo-1497366216548-37526070297c',
};

const SETUP = [
  ['store', 'Business name and type', 'Online, local store or on-site service.'],
  ['tag', 'Category', 'Tell people what kind of business you run.'],
  ['pin', 'Address and map pin', 'Placed on the map from your address.'],
  ['phone', 'Contact details', 'Phone, website and a chat number.'],
];

const FEATURES = [
  ['search', 'Found in Atkyn Search', 'Your name, category and details appear when people search for what you offer.'],
  ['pin', 'Placed on the map', 'A pin from your address helps customers find you and get directions.'],
  ['chat', 'One tap to reach you', 'Show your phone, website and a chat number so customers can contact you directly.'],
];

const BUSINESSES = [
  ['utensils', PHOTOS.restaurant, 'Restaurants and cafés', 'Local store', 'Put your address on the map so people can find your door.', 'An interior of a restaurant with tables and warm lighting'],
  ['bag', PHOTOS.retail, 'Retail stores', 'Local store', 'Show your category, phone number and location in one profile.', 'A retail store with clothing on racks and shelves'],
  ['scissors', PHOTOS.salon, 'Salons and on-site services', 'Service business', 'Serve customers at their location? Say so when you set your business type.', 'A hair salon with styling chairs and mirrors'],
  ['laptop', PHOTOS.office, 'Professional and online businesses', 'Online business', 'Link your website and a chat number so customers can reach you directly.', 'A bright modern office with desks and large windows'],
];

const STEPS = [
  ['Create', 'Enter your business name, type and category.'],
  ['Locate', 'Add your address and confirm the pin on the map.'],
  ['Connect', 'Add contact details and publish your profile.'],
];

const FAQS = [
  ['Is a Business Profile on Atkyn free?', 'Yes. Creating a Business Profile is free.'],
  ['Can I create a profile without a shop?', 'Yes. Choose "Service business" or "Online business" when you select your business type.'],
  ['Can I change my details later?', 'Yes. Your category and contact details are editable after you create your profile.'],
  ['What do I need to get started?', 'Your business name, category and address. Contact details are optional and can be skipped.'],
];

// Photo that quietly falls back to the surface tone if the CDN image fails.
function Photo({ id, w, alt, eager = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={img(id, w)}
      alt={alt}
      width={w}
      height={Math.round(w * 0.75)}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
}

function ProfilePreview() {
  return (
    <div className="card p-5 sm:p-6 w-full max-w-sm">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-brand/10 text-brand grid place-items-center shrink-0"><Icon name="store" /></span>
        <div className="min-w-0">
          <p className="font-semibold leading-tight truncate">Your business name</p>
          <p className="text-sm text-brand mt-0.5">Category</p>
        </div>
      </div>
      <ul className="mt-5 pt-5 hairline-t flex flex-col gap-3.5 text-sm text-muted">
        {[['pin', 'Address and map pin'], ['phone', 'Phone number'], ['globe', 'Website'], ['chat', 'Chat number']].map(([i, t]) => (
          <li key={t} className="flex items-center gap-2.5"><Icon name={i} className="w-4 h-4 text-brand shrink-0" />{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Landing({ onStart }) {
  const [open, setOpen] = useState(0);
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pt-12 sm:pt-16 lg:pt-24 pb-16 lg:pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <p className="text-sm font-medium text-brand">Atkyn Business Profile</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.08] text-ink">
            Get your business found on Atkyn.
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
            Create a free Business Profile in a few minutes. Show up in Atkyn Search and on the map, with the details customers need to reach you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={onStart} className="btn btn-primary">Create your profile</button>
            <a href="#how" className="btn btn-secondary">See how it works</a>
          </div>
        </div>
        <div className="reveal relative" style={{ animationDelay: '80ms' }}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface2 hairline">
            <Photo id={PHOTOS.hero} w={1000} eager alt="Inside a bright neighborhood café with a service counter and seating" />
          </div>
          <div className="glass-float absolute left-3 right-3 bottom-3 sm:left-4 sm:right-auto sm:bottom-4 px-4 py-3 flex items-center gap-3 sm:max-w-xs">
            <span className="w-9 h-9 rounded-lg bg-brand text-white grid place-items-center shrink-0"><Icon name="pin" className="w-[18px] h-[18px]" /></span>
            <p className="text-sm font-medium text-ink2 leading-snug">Shown in Atkyn Search and on the map</p>
          </div>
        </div>
      </section>

      {/* What you add */}
      <section className="bg-surface hairline-t hairline-b">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-12 sm:py-14">
          <h2 className="text-xl font-semibold tracking-tight">What you'll add to your profile</h2>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {SETUP.map(([icon, t, d]) => (
              <li key={t}>
                <Icon name={icon} className="w-5 h-5 text-brand" />
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features: split layout */}
      <section id="features" className="mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-28 scroll-mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-md">Everything customers look for, in one place.</h2>
          <ul className="mt-10">
            {FEATURES.map(([icon, t, d]) => (
              <li key={t} className="hairline-t py-6 flex gap-4">
                <span className="w-9 h-9 rounded-lg bg-brand/10 text-brand grid place-items-center shrink-0"><Icon name={icon} className="w-[18px] h-[18px]" /></span>
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-muted leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-5 sm:p-10 grid place-items-center">
          <ProfilePreview />
        </div>
      </section>

      {/* Business types */}
      <section id="businesses" className="bg-surface hairline-t hairline-b scroll-mt-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-28">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-xl">Built for the way you do business.</h2>
          <p className="mt-4 text-lg text-muted max-w-xl leading-relaxed">Online, in a store or at your customer's door. Pick the type that fits and set up your profile around it.</p>
          <ul className="mt-12 grid sm:grid-cols-2 gap-5">
            {BUSINESSES.map(([icon, id, t, type, d, alt]) => (
              <li key={t} className="tile card card-link overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] bg-surface2 overflow-hidden">
                  <Photo id={id} w={720} alt={alt} className="zoom-img" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-brand"><Icon name={icon} className="w-4 h-4" />{type}</div>
                  <h3 className="mt-2 text-lg font-semibold">{t}</h3>
                  <p className="mt-1.5 text-muted leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-28 scroll-mt-14">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-md">Three steps. A few minutes.</h2>
        <ol className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-8">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="hairline-t pt-6">
              <span className="text-sm font-semibold text-brand tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t}</h3>
              <p className="mt-2 text-muted leading-relaxed max-w-xs">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <button type="button" onClick={onStart} className="btn btn-primary">Start now<Icon name="arrow" className="w-4 h-4" /></button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-surface hairline-t scroll-mt-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">Questions</h2>
          <div className="flex flex-col gap-3">
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="card card-link">
                  <h3>
                    <button type="button" id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left font-medium cursor-pointer rounded-2xl">
                      {q}
                      <Icon name="chevron" className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="acc" data-open={isOpen}>
                    <div><p className="px-5 sm:px-6 pb-5 text-muted leading-relaxed">{a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="hairline-t bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <img src="/Atkyn.svg" alt="Atkyn" className="h-6 w-auto self-start" />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
            {[['Features', '#features'], ['Businesses', '#businesses'], ['How it works', '#how'], ['FAQ', '#faq']].map(([t, h]) => <a key={h} href={h} className="hover:text-ink transition-colors">{t}</a>)}
          </nav>
          <p className="text-sm text-muted">© {new Date().getFullYear()} Atkyn. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
      }
