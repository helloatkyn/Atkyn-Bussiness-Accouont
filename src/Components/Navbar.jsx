import { useState } from 'react';
import Icon from './Icon';

export default function Navbar({ onStart }) {
  const [open, setOpen] = useState(false);
  const links = [['Features', '#features'], ['Businesses', '#businesses'], ['How it works', '#how'], ['FAQ', '#faq']];
  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass border-x-0 border-t-0">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 h-14 flex items-center justify-between gap-4">
        <a href="/" aria-label="Atkyn home" className="shrink-0"><img src="/Atkyn.svg" alt="Atkyn" className="h-7 w-auto" /></a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {links.map(([t, h]) => <a key={h} href={h} className="hover:text-ink transition-colors">{t}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => { close(); onStart(); }} className="btn btn-primary btn-sm">Create profile</button>
          <button type="button" className="md:hidden btn btn-secondary btn-sm !px-0 w-10" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="menu-panel md:hidden" data-open={open} aria-hidden={!open}>
        <div>
          <nav aria-label="Mobile" className="hairline-t bg-white px-5 py-2 flex flex-col">
            {links.map(([t, h]) => (
              <a key={h} href={h} onClick={close} tabIndex={open ? 0 : -1} className="py-3.5 text-base font-medium text-ink2 hairline-b last:border-b-0">{t}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
