import { useState } from 'react';

export default function CreateBusinessProfile() {
  const [businessName, setBusinessName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      {/* 1. Top Bar / Language Selector */}
      <header className="w-full flex justify-end p-6 md:px-12">
        <div className="relative inline-block">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3.5 py-1.5 text-xs text-blue-700 font-medium hover:bg-blue-50/50 transition">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
              <path
                d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                strokeWidth="1.8"
              />
            </svg>
            <span>English</span>
            <span className="text-[10px] text-gray-500">▼</span>
          </button>
        </div>
      </header>

      {/* 2. Main Content Split */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 py-8">
        
        {/* Left Column: Phone & Card Mockup */}
        <div className="w-full max-w-sm flex items-center justify-center relative select-none">
          {/* Outer Mobile Frame */}
          <div className="w-[300px] h-[580px] rounded-[38px] border-[3px] border-gray-300 bg-white shadow-xl relative overflow-hidden flex flex-col p-4 pt-6">
            
            {/* Atkyn Logo */}
            <div className="flex justify-center mb-3">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>

            {/* Search Bar Skeleton */}
            <div className="w-full h-8 rounded-full border border-gray-300 flex items-center px-3 mb-4">
              <svg className="w-3.5 h-3.5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" strokeWidth="2" />
              </svg>
              <div className="h-1.5 w-20 bg-gray-200 rounded-full"></div>
            </div>

            {/* Top Wireframe lines */}
            <div className="flex flex-col gap-1.5 mb-6 px-1">
              <div className="h-1.5 w-16 bg-gray-300 rounded-full"></div>
              <div className="h-1.5 w-28 bg-gray-200 rounded-full"></div>
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute top-[140px] -left-3 right-3 bg-white rounded-2xl border border-gray-300 shadow-2xl p-4 z-20 flex gap-3 items-center">
              <div className="flex-1">
                {/* Live typing title preview */}
                <p className="font-semibold text-xs text-blue-600 truncate min-h-[16px]">
                  {businessName || 'Business Name'}
                </p>
                <div className="flex text-gray-300 text-xs mt-1">
                  ★★★★★
                </div>
                <div className="h-1 w-14 bg-blue-500 rounded-full mt-2.5"></div>
              </div>

              {/* Storefront Illustration */}
              <div className="w-16 h-14 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="text-2xl">🏪</div>
              </div>
            </div>

            {/* Action Circles (Directions, Call, Save, Share) */}
            <div className="mt-28 flex justify-around py-3 border-t border-b border-gray-100 px-1">
              <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-[11px]">🧭</div>
              <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-[11px]">📞</div>
              <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-[11px]">🔖</div>
              <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-[11px]">🔗</div>
            </div>

            {/* Lower Info Rows */}
            <div className="flex flex-col gap-4 mt-4 px-1">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs">📍</span>
                <div className="h-1.5 w-32 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs">🕒</span>
                <div className="h-1.5 w-24 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs">📞</span>
                <div className="h-1.5 w-28 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs">🌐</span>
                <div className="h-1.5 w-20 bg-gray-200 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form Input */}
        <div className="w-full max-w-lg">
          <h1 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight leading-tight">
            Get your business discovered on Atkyn Search, Maps and more
          </h1>

          <p className="mt-4 text-sm text-gray-600">
            Enter a few business details to get started
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8">
            {/* Atkyn Material Design Outlined Textfield */}
            <div className="relative">
              <input
                id="business-name"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Business name"
                className={`w-full px-4 py-3.5 text-sm md:text-base rounded-md outline-none transition-all duration-200 ${
                  isFocused || businessName
                    ? 'border-2 border-blue-600'
                    : 'border border-red-500 hover:border-gray-800'
                }`}
              />
              <label
                htmlFor="business-name"
                className={`absolute left-3 -top-2.5 px-1.5 bg-white text-xs font-medium transition-all ${
                  isFocused || businessName ? 'text-blue-600' : 'text-red-600'
                }`}
              >
                Business name*
              </label>
            </div>

            {/* Continue Button */}
            <div className="mt-8">
              <button
                type="button"
                disabled={!businessName.trim()}
                className={`px-7 py-2.5 rounded-md text-sm font-medium transition-all ${
                  businessName.trim()
                    ? 'bg-[#1a73e8] text-white hover:bg-blue-700 shadow-sm cursor-pointer'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}