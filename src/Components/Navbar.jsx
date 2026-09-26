export default function Navbar({ onSignIn, onStartNow }) {
  return (
    <header className="flex items-center justify-between px-8 py-3.5 border-b border-gray-200 sticky top-0 bg-white z-50">
      {/* Left side: Business Title & Categories */}
      <div className="flex items-center gap-8">
        <a href="/" className="text-xl font-bold text-gray-900 tracking-tight cursor-pointer">
          Atkyn Business Profile
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('retail')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
          >
            Retail
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('services')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('restaurants')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
          >
            Restaurants
          </button>
        </nav>
      </div>

      {/* Right side: Sign In & Start Now Buttons */}
      <div className="flex items-center gap-3">
        <button 
          type="button"
          onClick={onSignIn} 
          className="text-blue-600 hover:text-blue-700 font-medium text-sm px-3 py-1.5 cursor-pointer"
        >
          Sign in
        </button>
        <button 
          type="button"
          onClick={onStartNow || onSignIn}
          className="bg-blue-600 text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-blue-700 cursor-pointer"
        >
          Start now
        </button>
      </div>
    </header>
  );
}