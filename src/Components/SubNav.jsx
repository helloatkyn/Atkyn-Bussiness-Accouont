export default function SubNav() {
  const navLinks = [
    "Where to start?",
    "Solutions",
    "Learning & insights",
    "Get support",
  ];

  return (
    <nav className="flex items-center px-6 md:px-12 py-3 bg-white border-b border-gray-200">
     {/* Atkyn "G" Logo -> Ab yeh Home Page link ban chuka hai */}
     <a href="/" className="mr-8 flex items-center cursor-pointer">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
     </a>

      {/* Nav Links */}
      <ul className="flex items-center gap-6 md:gap-8">
        {navLinks.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}