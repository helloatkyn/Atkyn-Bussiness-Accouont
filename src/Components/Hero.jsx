import Atkyn_video from '../assets/Atkyn_video.mp4';

export default function Hero({ onStart }) {
  return (
    /* 1. Parent section ko w-full aur max-w-7xl kiya taaki poora screen cover kare */
    <section className="text-center py-16 px-4 md:px-8 w-full max-w-7xl mx-auto">
      
      {/* Text content ko center me compact rakhne ke liye max-w-4xl inner div me diya */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Stand out on Atkyn with a free Business Profile
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Take control of how your free Business Profile appears on Atkyn Search and Maps. Personalise your profile with photos, manage customer reviews, and share what makes your business unique to attract new customers.
        </p>

        <button
type="button"
          onClick={onStart}
 className="mt-6 bg-[#1a73e8] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          
Create Your Profile
        </button>
      </div>

      {/* 2. Outer Light Blue Card: w-full se dono side poora fail jayega */}
      <div className="mt-12 bg-blue-50/50 rounded-3xl p-6 md:p-12 border border-blue-100 shadow-sm flex flex-col items-center w-full">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Connect with <span className="text-blue-600">customers</span>
        </h3>

        {/* 3. Video Card Container: w-full max-w-5xl taaki video screen par bada dikhe */}
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover block"
          >
            <source src={Atkyn_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 4. Bottom Text Card */}
        <div className="mt-6 bg-white py-4 px-8 rounded-xl shadow-sm border border-gray-200 text-center">
          <p className="font-semibold text-gray-800 text-sm md:text-base">
            Your profile and customer journey start here.
          </p>
        </div>
      </div>

    </section>
  );
}