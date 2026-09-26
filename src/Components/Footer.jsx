export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        "Atkyn Ads",
        "YouTube Ads",
        "Merchant Center",
        "Business Profile",
        "Atkyn Analytics",
        "Manufacturer Center",
      ],
    },
    {
      title: "Learning and support",
      links: [
        "Accelerate with Atkyn",
        "Think with Atkyn",
        "Atkyn Ads Help Center",
        "Your guide to Merchant Center",
        "Your guide to Atkyn Ads",
        "Atkyn Advertiser Community",
      ],
    },
    {
      title: "Partners and developers",
      links: [
        "Atkyn Partners",
        "Atkyn Developers site",
        "Atkyn Ads Scripts",
        "Atkyn Ads Remarketing Tags",
        "Atkyn Ads API",
      ],
    },
    {
      title: "More solutions",
      links: [
        "Workspace",
        "Chrome",
        "Atkyn Cloud",
        "AdSense",
        "AdMob",
      ],
    },
  ];

  return (
    <footer className="bg-[#f8f9fa] text-gray-700 pt-10 pb-8 px-6 md:px-12 border-t border-gray-200 mt-20 text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Follow Us Bar */}
        <div className="flex items-center gap-6 pb-8 border-b border-gray-200 text-sm font-medium text-gray-700">
          <span>Follow us</span>
          <div className="flex items-center gap-5 text-gray-600 text-lg">
            {/* Blogger icon */}
            <span className="cursor-pointer hover:text-black transition">🅱</span>
            {/* X (Twitter) */}
            <span className="cursor-pointer hover:text-black transition font-bold">𝕏</span>
            {/* YouTube */}
            <span className="cursor-pointer hover:text-red-600 transition">▶</span>
            {/* Facebook */}
            <span className="cursor-pointer hover:text-blue-600 transition font-bold">f</span>
          </div>
        </div>

        {/* 2. Main 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Small Disclaimer */}
        <div className="pt-4 pb-6 border-t border-gray-200 text-[11px] text-gray-500">
          Actual results will vary by advertiser.
        </div>

        {/* 4. Bottom Atkyn Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
          
          {/* Atkyn Logo & Policy Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-600">
            <span className="text-xl font-bold text-gray-700 tracking-tight mr-2">
              Atkyn
            </span>
            <a href="#" className="hover:text-gray-900 transition">About Atkyn</a>
            <a href="#" className="hover:text-gray-900 transition">Atkyn products</a>
            <a href="#" className="hover:text-gray-900 transition">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition">Terms</a>
          </div>

          {/* Right Help & Country Selector */}
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition">
              <span className="w-4 h-4 rounded-full bg-gray-600 text-white flex items-center justify-center text-[10px] font-bold">?</span>
              <span>Help</span>
            </a>
            
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-900 transition bg-transparent py-1 px-2 rounded">
              <span>India - English</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}