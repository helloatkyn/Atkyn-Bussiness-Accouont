import { useState } from 'react';

export default function SalesSection() {
  const [activeTab, setActiveTab] = useState('Retail'); // 'Retail' | 'Services' | 'Restaurants'

  return (
    <section className="bg-[#202124] text-white py-20 px-4 md:px-10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* 1. Category Switcher Tabs */}
        <div className="inline-flex items-center gap-1 bg-[#2d2e30] p-1.5 rounded-full border border-gray-700/60 shadow-inner">
          <button
            onClick={() => setActiveTab('Retail')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeTab === 'Retail'
                ? 'bg-[#3c4043] text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>🛒</span> Retail
          </button>
          <button
            onClick={() => setActiveTab('Services')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeTab === 'Services'
                ? 'bg-[#3c4043] text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>🛎️</span> Services
          </button>
          <button
            onClick={() => setActiveTab('Restaurants')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeTab === 'Restaurants'
                ? 'bg-[#3c4043] text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>🍴</span> Restaurants
          </button>
        </div>

        {/* ==================== 1. RETAIL VIEW ==================== */}
        {activeTab === 'Retail' && (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold mt-10 tracking-tight text-center">
              Turn online searches into sales
            </h2>

            <button className="mt-7 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-medium px-7 py-3 rounded-full transition-all shadow-md">
              Explore retail features
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full max-w-6xl">
              {/* Card 1: Blue */}
              <div className="bg-[#8ab4f8] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Get discovered for what you sell
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Attract shoppers searching for the items you carry. Showcase your popular products on your profile to let customers know you have what they need.
                  </p>
                </div>

                <div className="bg-white rounded-t-3xl pt-5 px-4 shadow-xl border border-gray-100 mt-6 -mb-7">
                  <span className="text-[11px] font-bold text-gray-700 block mb-3 pl-1">See what's in store</span>
                  <div className="flex flex-col gap-2 pb-6">
                    <div className="flex items-center gap-3 p-1.5 rounded-xl border border-gray-100">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=120&q=80" alt="Brushes" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">Brushes</span>
                    </div>
                    <div className="flex items-center gap-3 p-1.5 rounded-xl border border-gray-100">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=120&q=80" alt="Textile" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">Textile</span>
                    </div>
                    <div className="flex items-center gap-3 p-1.5 rounded-xl border border-gray-100">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&q=80" alt="Paint" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">Paint</span>
                    </div>
                    <div className="flex items-center gap-3 p-1.5 rounded-xl border border-gray-100">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1580569214296-5cf2ebe66dd0?w=120&q=80" alt="Markers" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">Markers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Yellow */}
              <div className="bg-[#fdd663] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">The Good Design Store</h4>
                      <div className="text-amber-500 text-xs mt-0.5">★★★★★</div>
                      <div className="h-1.5 w-16 bg-gray-200 rounded-full mt-2"></div>
                    </div>
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&q=80" alt="Store front" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-600">
                    <span className="text-red-500 font-medium">✕ In-store shopping</span>
                    <span className="text-emerald-700 font-medium">✓ Curbside pickup</span>
                    <span className="text-emerald-700 font-medium">✓ Delivery</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Offer more ways to shop
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Show whether you offer options like curbside pickup or delivery. Even add links to preferred ordering services, like Instacart, so customers can choose how they shop.
                  </p>
                </div>
              </div>

              {/* Card 3: Green */}
              <div className="bg-[#81c995] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Turn shoppers into lasting customers
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Make your online presence your second storefront. Share updates on new arrivals, exclusive discounts, and upcoming events. Give shoppers a reason to choose you.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Boutique" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">Sweater Boutique</span>
                    </div>
                    <div className="text-gray-400 text-xs flex gap-1.5">
                      <span>↗</span>
                      <span>⋮</span>
                    </div>
                  </div>
                  <div className="h-32 rounded-2xl overflow-hidden bg-gray-100 mb-2">
                    <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80" alt="Sale apparel" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 block">Up to 50% OFF all apparel</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. SERVICES VIEW ==================== */}
        {activeTab === 'Services' && (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold mt-10 tracking-tight text-center">
              Turn online searches into new clients
            </h2>

            <button className="mt-7 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-medium px-7 py-3 rounded-full transition-all shadow-md">
              See all service features
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full max-w-6xl">
              {/* Card 1: Yellow */}
              <div className="bg-[#fdd663] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Fill your calendar with seamless online booking
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Enable 24/7 online booking directly from your Business Profile. Let clients schedule in-person or virtual appointments at their convenience, without you picking up the phone.
                  </p>
                </div>

                <div className="bg-white rounded-t-3xl pt-5 px-4 shadow-xl border border-gray-100 mt-6 -mb-7">
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                    <div>
                      <span className="text-xs font-bold text-gray-800 block">Plumber near me</span>
                      <span className="text-[10px] text-gray-500">R&T Plumbing • 4.8 ★</span>
                    </div>
                    <span className="text-gray-400 text-xs">✕</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="h-20 rounded-xl overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=300&q=80" alt="Plumbing" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-20 rounded-xl overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=80" alt="Tools" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 flex items-center gap-2 mb-4">
                    <span>📅</span>
                    <span className="text-[11px] font-semibold text-gray-800">Make an appointment • rtplumbing.nyc</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Green */}
              <div className="bg-[#81c995] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div className="flex flex-col gap-3">
                  <div className="bg-white rounded-2xl p-3.5 shadow-md border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=120&q=80" alt="Electrician" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-800 block">Watts & Volts Electrician</span>
                        <span className="text-[10px] text-amber-500">5.0 ★</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">Get quote</span>
                  </div>

                  <div className="bg-white rounded-2xl p-3.5 shadow-md border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=120&q=80" alt="Architect" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-800 block">Architect & Build</span>
                        <span className="text-[10px] text-amber-500">4.7 ★</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">Get quote</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Win the job with faster quotes
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Respond to quote requests in real-time. By giving customers the info they need sooner. Become the easiest choice while they're still comparing options.
                  </p>
                </div>
              </div>

              {/* Card 3: Blue */}
              <div className="bg-[#8ab4f8] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Showcase your expertise and define your service area
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Define your service areas and specialties. Signal to local customers exactly what you do and where you work — even if you operate without a physical storefront.
                  </p>
                </div>

                <div className="bg-white rounded-t-3xl pt-5 px-4 shadow-xl border border-gray-100 mt-6 -mb-7">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-800">Detroit Voltage</span>
                    <span className="text-gray-400 text-xs">✕</span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-800 border-b-2 border-emerald-700 pb-1 w-max mb-3">
                    Services
                  </div>
                  <div className="flex flex-col gap-2 pb-6">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-xs font-semibold text-gray-800 block">Install electric car charger</span>
                      <div className="h-1.5 w-24 bg-gray-200 rounded-full mt-2"></div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-xs font-semibold text-gray-800 block">Install outlets or switches</span>
                      <div className="h-1.5 w-20 bg-gray-200 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 3. RESTAURANTS VIEW ==================== */}
        {activeTab === 'Restaurants' && (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold mt-10 tracking-tight text-center">
              Attract more diners and accept food orders
            </h2>

            <button className="mt-7 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-medium px-7 py-3 rounded-full transition-all shadow-md">
              View restaurant features
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full max-w-6xl">
              {/* Card 1: Blue - Persian Restaurant Dishes */}
              <div className="bg-[#8ab4f8] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Share your best dishes and full menu
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Showcase your top dishes with high-quality photos and clear pricing. Help hungry diners discover what you serve before they walk through the door.
                  </p>
                </div>

                <div className="bg-white rounded-t-3xl pt-5 px-4 shadow-xl border border-gray-100 mt-6 -mb-7">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-800">Persian Restaurant</span>
                    <span className="text-gray-400 text-xs">✕</span>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-500 mb-3 border-b border-gray-100 pb-1.5">
                    <span className="text-emerald-700 font-bold border-b-2 border-emerald-600 pb-1">Menu</span>
                    <span>Overview</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pb-6">
                    <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                      <div className="h-20">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80" alt="Beef Ribs" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-800 p-1.5 block">Beef Ribs</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                      <div className="h-20">
                        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80" alt="Pulled Pork Sandwich" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-800 p-1.5 block">Pulled Pork Sandwich</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Yellow - Wexton Hill Cafe Reservations */}
              <div className="bg-[#fdd663] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Wexton Hill Cafe</h4>
                    <div className="text-amber-500 text-xs mt-0.5">★★★★★</div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex-1 bg-cyan-50 text-cyan-800 border border-cyan-200 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                      <span>📅</span> Reserve
                    </button>
                    <div className="h-8 w-20 bg-cyan-50 rounded-full border border-cyan-200"></div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-600">
                    <span className="text-red-500 font-medium">✕ Dine in</span>
                    <span className="text-emerald-700 font-medium">✓ Takeout</span>
                    <span className="text-emerald-700 font-medium">✓ Delivery</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Fill your tables with online reservations
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Let customers reserve a table directly from your profile by integrating with booking partners.
                  </p>
                </div>
              </div>

              {/* Card 3: Peach/Red - Local Brew Cafe Orders */}
              <div className="bg-[#f28b82] text-gray-900 rounded-[2.5rem] p-7 flex flex-col justify-between overflow-hidden min-h-[580px] shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight">
                    Accept online orders for takeout or delivery
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    Make it easy for customers to order takeout or delivery straight from your Business Profile.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-3 shadow-xl border border-gray-100 mt-6">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="h-20 rounded-xl overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&q=80" alt="Burger" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-20 rounded-xl overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80" alt="Platter" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-800 block">Local Brew Cafe</span>
                  <div className="text-amber-500 text-[10px] mb-2">★★★★★</div>
                  <div className="bg-gray-50 rounded-xl p-2 border border-gray-100">
                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-800 mb-1.5">
                      <span>🍴 Order online</span>
                      <span>›</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-[10px]">
                      <span className="bg-gray-200 text-center py-1 rounded-md font-medium">Pickup</span>
                      <span className="bg-gray-100 text-center py-1 rounded-md font-medium text-gray-600">Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}