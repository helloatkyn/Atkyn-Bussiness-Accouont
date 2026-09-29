import { useState } from 'react';
import Icon from './Icon';

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

export default function Landing({ onStart }) {
  const [open, setOpen] = useState(0);
  return (
    <main className="pt-28">
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="rise text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          Get your business found on Atkyn.
        </h1>
        <p className="rise mt-6 text-lg md:text-xl text-black/60 max-w-2xl mx-auto" style={{ animationDelay: '.1s' }}>
          Create a free Business Profile in a few minutes. Show up in Atkyn Search and on the map, with the details customers need to reach you.
        </p>
        <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: '.2s' }}>
          <button type="button" onClick={onStart} className="btn btn-primary !px-8 !py-3.5 !text-base">Create your profile</button>
          <a href="#how" className="btn btn-glass !px-8 !py-3.5 !text-base">See how it works</a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="glass rounded-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-white/70">
          {SETUP.map(([icon, t, d]) => (
            <div key={t} className="p-7">
              <span className="w-11 h-11 rounded-2xl bg-brand/10 text-brand grid place-items-center"><Icon name={icon} /></span>
              <h3 className="mt-5 font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-black/55 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">Everything customers look for, in one place.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {FEATURES.map(([icon, t, d], i) => (
            <div key={t} className={`glass rounded-[2rem] p-8 ${i === 1 ? 'md:-translate-y-4' : ''}`}>
              <span className="w-12 h-12 rounded-full bg-gradient-to-b from-[#1590d0] to-brand text-white grid place-items-center shadow-lg shadow-brand/30"><Icon name={icon} /></span>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-black/55 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">Three steps. A few minutes.</h2>
        <ol className="mt-14 grid md:grid-cols-3 gap-10">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="text-center">
              <span className="glass mx-auto w-16 h-16 rounded-full grid place-items-center text-2xl font-semibold text-brand">{i + 1}</span>
              <h3 className="mt-6 text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-black/55 max-w-xs mx-auto">{d}</p>
            </li>
          ))}
        </ol>
        <div className="text-center mt-12">
          <button type="button" onClick={onStart} className="btn btn-primary !px-8 !py-3.5 !text-base">Start now</button>
        </div>
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 py-20 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">Questions</h2>
        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map(([q, a], i) => (
            <div key={q} className="glass rounded-3xl">
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left font-medium cursor-pointer">
                {q}
                <Icon name="plus" className={`w-5 h-5 shrink-0 text-black/40 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
              </button>
              {open === i && <p className="px-7 pb-6 -mt-1 text-black/60 leading-relaxed">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="px-4 pb-6">
        <div className="glass-soft max-w-5xl mx-auto rounded-3xl px-7 py-5 flex flex-wrap items-center justify-between gap-3 text-sm text-black/50">
          <img src="/Atkyn.svg" alt="Atkyn" className="h-6 w-auto" />
          <span>© {new Date().getFullYear()} Atkyn. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
