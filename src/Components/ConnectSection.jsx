import { useState } from 'react';

export default function ConnectSection() {
  // 0 = Blue, 1 = Yellow, 2 = Green
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    // 1. Blue Card (Show what you offer)
    {
      id: 0,
      bgColor: 'bg-[#8ab4f8]',
      title: 'Show what you offer, from products to services',
      description:
        "Let customers make orders and reservations, see what you sell and what's in stock, or book services you offer — all directly from your profile.",
      renderPreview: () => (
        <div className="bg-white rounded-3xl shadow-xl p-4 w-full max-w-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <div className="h-32 rounded-xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80"
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Meze House and Grill</h4>
              <div className="flex text-amber-500 text-xs mt-1">★★★★★</div>
            </div>
            <div className="flex gap-2 text-xs border-b border-gray-200 pb-2 text-gray-500">
              <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Menu</span>
              <span>Overview</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                <div className="h-14 rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80"
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-semibold text-gray-700 mt-1 block">Tahdig rice</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                <div className="h-14 rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&q=80"
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-semibold text-gray-700 mt-1 block">Burrata salad</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-emerald-50 border border-gray-100 min-h-[200px] flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="text-red-500 text-3xl font-bold animate-pulse">📍</div>
          </div>
        </div>
      ),
    },

    // 2. Yellow Card (Build trust with reviews)
    {
      id: 1,
      bgColor: 'bg-[#fdd663]',
      title: 'Build trust with reviews',
      description:
        'Respond to reviews, share photos of your business, and post updates to help potential customers choose you over competitors.',
      renderPreview: () => (
        <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-gray-900">4.5</span>
              <div className="text-amber-500 text-sm">★★★★☆</div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 w-[85%] rounded-full"></div>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">
                  R
                </div>
                <span className="text-xs font-semibold text-gray-800">Rahul S.</span>
              </div>
              <p className="text-[11px] text-gray-600 italic">
                "Great ambience and wonderful service. Highly recommended!"
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-amber-50 border border-gray-100 min-h-[190px] flex flex-col items-center justify-center p-4 text-center">
            <div className="text-red-500 text-3xl font-bold">📍</div>
            <span className="text-xs font-bold text-gray-800 mt-2">Verified Location</span>
            <span className="text-[10px] text-gray-500">120+ happy customer reviews</span>
          </div>
        </div>
      ),
    },

    // 3. Green Card (Keep your customers updated)
    {
      id: 2,
      bgColor: 'bg-[#81c995]', // Green background color
      title: 'Keep your customers updated',
      description:
        'Share up-to-date info about your business, such as your hours and contact information. Add posts to promote special offers, events, and updates to keep customers in the loop.',
      renderPreview: () => (
        <div className="relative w-full max-w-xl">
          {/* Background Card with Atkyn Maps & Header Profile */}
          <div className="bg-white rounded-3xl shadow-xl p-5 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Header info */}
            <div>
              <h4 className="font-bold text-gray-900 text-base">Anza Yoga</h4>
              <div className="flex text-amber-500 text-xs mt-1">★★★★★</div>
              <div className="mt-3 flex gap-2 border-b border-gray-200 pb-2 text-xs">
                <span className="text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-1">Updates</span>
                <span className="text-gray-400">Overview</span>
              </div>
            </div>

            {/* Simulated Map View */}
            <div className="relative rounded-2xl overflow-hidden bg-emerald-50 border border-gray-100 min-h-[160px] flex items-center justify-center">
              <div className="absolute top-2 left-2 flex gap-1 text-[9px] text-gray-600">
                <span className="bg-white px-2 py-0.5 rounded-full shadow-sm">🍽 Restaurants</span>
                <span className="bg-white px-2 py-0.5 rounded-full shadow-sm">🏨 Hotels</span>
              </div>
              <div className="text-red-500 text-2xl animate-bounce">📍</div>
            </div>
          </div>

          {/* Floating Post Card (Foreground) */}
          <div className="md:absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 w-full md:w-80 mt-4 md:mt-0 z-20">
            {/* Profile Bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=100&q=80"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-800">Anza Yoga</span>
              </div>
              <div className="flex gap-2 text-gray-400 text-xs">
                <span>↗</span>
                <span>⋮</span>
              </div>
            </div>

            {/* Post Photo */}
            <div className="h-32 rounded-xl overflow-hidden bg-gray-100 mb-2">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80"
                alt="Outdoor Yoga Session"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Caption */}
            <p className="text-[11px] text-gray-700 font-medium">
              Join us for outdoor yoga every Sunday morning.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Headings */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Easily connect with customers
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Be found when people are searching on Atkyn Maps and Search for businesses just like yours.
        </p>
      </div>

      {/* Main Dynamic Card */}
      <div
        className={`relative ${slides[activeSlide].bgColor} rounded-[2.5rem] p-8 md:p-14 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm transition-all duration-500`}
      >
        <div className="lg:w-5/12 text-left z-10">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            {slides[activeSlide].title}
          </h3>
          <p className="mt-6 text-gray-800 text-sm md:text-base leading-relaxed">
            {slides[activeSlide].description}
          </p>
        </div>

        <div className="lg:w-7/12 w-full flex items-center justify-center relative">
          {slides[activeSlide].renderPreview()}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
        {/* Next / Prev Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition active:scale-95"
          >
            &lt;
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition active:scale-95"
          >
            &gt;
          </button>
        </div>

        {/* 3 Active Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={`cursor-pointer h-2 rounded-full transition-all ${
                activeSlide === index ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}