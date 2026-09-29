export default function Navbar({ onStart }) {
  const links = [['Features', '#features'], ['How it works', '#how'], ['FAQ', '#faq']];
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="glass mx-auto max-w-5xl rounded-full flex items-center justify-between pl-6 pr-2 py-2">
        <a href="/" aria-label="Atkyn home"><img src="/Atkyn.svg" alt="Atkyn" className="h-7 w-auto" /></a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/60">
          {links.map(([t, h]) => <a key={h} href={h} className="hover:text-black transition-colors">{t}</a>)}
        </nav>
        <button type="button" onClick={onStart} className="btn btn-primary !py-2 !px-5 !text-sm">Create profile</button>
      </div>
    </header>
  );
}
