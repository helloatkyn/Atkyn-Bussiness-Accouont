export default function InsightsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Mockup Analytics Cards */}
        <div className="lg:w-1/2 w-full relative flex flex-col items-center">
          
          {/* Card 1: Performance Line Chart (Top) */}
          <div className="w-full max-w-lg bg-white rounded-3xl border border-gray-200/80 shadow-lg p-5 md:p-6 mb-[-4rem] z-0">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">←</span>
                <span className="text-sm font-semibold text-gray-800">Performance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <span>⋮</span>
                <span>✕</span>
              </div>
            </div>

            {/* Time Period Filter Mockup */}
            <div className="mt-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-[11px] text-gray-600">
                <span>Time period</span>
                <span>▼</span>
              </div>
              <span className="text-xs font-semibold text-blue-600 border-b-2 border-blue-600 pb-0.5">Overview</span>
            </div>

            {/* Line Chart Wave SVG */}
            <div className="mt-4 h-24 w-full">
              <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                <path
                  d="M0,75 C50,75 70,60 110,65 C150,70 170,45 220,50 C270,55 300,68 340,65 C370,62 385,45 400,20 L400,100 L0,100 Z"
                  fill="#e8f0fe"
                  opacity="0.6"
                />
                <path
                  d="M0,75 C50,75 70,60 110,65 C150,70 170,45 220,50 C270,55 300,68 340,65 C370,62 385,45 400,20"
                  fill="none"
                  stroke="#1a73e8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="400" cy="20" r="4" fill="#1a73e8" />
              </svg>
            </div>
          </div>

          {/* Card 2: Discovery Breakdown & Search Terms (Foreground) */}
          <div className="w-full max-w-lg bg-white rounded-3xl border border-gray-200/90 shadow-2xl p-5 md:p-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Donut Chart / Views Breakdown */}
            <div className="border-r-0 md:border-r border-gray-100 pr-0 md:pr-3">
              <span className="text-[11px] text-gray-500 font-medium block">How people discovered you</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">4,275</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">👁 Views</span>
              </div>

              {/* Donut Simulation */}
              <div className="mt-4 flex items-center justify-center">
                <div className="relative w-24 h-24 rounded-full border-[10px] border-blue-500 border-t-amber-400 border-r-rose-400 border-b-emerald-400 flex items-center justify-center">
                </div>
              </div>

              {/* Legends */}
              <div className="mt-4 flex flex-col gap-1.5 text-[10px] text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Search - Desktop</span>
                  <span className="ml-auto font-medium text-gray-800">48%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Search - Mobile</span>
                  <span className="ml-auto font-medium text-gray-800">27%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span>Maps - Mobile</span>
                  <span className="ml-auto font-medium text-gray-800">22%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Maps - Desktop</span>
                  <span className="ml-auto font-medium text-gray-800">3%</span>
                </div>
              </div>
            </div>

            {/* Search Terms Ranking */}
            <div className="pl-0 md:pl-2">
              <span className="text-2xl font-bold text-gray-900 block">2,676</span>
              <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">🔍 Search terms</span>

              <ol className="mt-4 flex flex-col gap-2.5 text-xs text-gray-700">
                <li className="flex items-center justify-between pb-1 border-b border-gray-50">
                  <span>1. cafe</span>
                  <span className="w-6 h-2 bg-gray-100 rounded-full"></span>
                </li>
                <li className="flex items-center justify-between pb-1 border-b border-gray-50">
                  <span>2. breakfast</span>
                  <span className="w-8 h-2 bg-gray-100 rounded-full"></span>
                </li>
                <li className="flex items-center justify-between pb-1 border-b border-gray-50">
                  <span>3. latte</span>
                  <span className="w-5 h-2 bg-gray-100 rounded-full"></span>
                </li>
                <li className="flex items-center justify-between pb-1 border-b border-gray-50">
                  <span>4. pastry</span>
                  <span className="w-7 h-2 bg-gray-100 rounded-full"></span>
                </li>
                <li className="flex items-center justify-between">
                  <span>5. mocha latte</span>
                  <span className="w-6 h-2 bg-gray-100 rounded-full"></span>
                </li>
              </ol>
            </div>

          </div>

        </div>

        {/* Right Side: Text Description */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Gain insights into how customers find your business
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Discover what keywords people search to find you, and get insights on calls, reviews, bookings, and more to understand how your business connects with customers.
          </p>
        </div>

      </div>
    </section>
  );
}