export default function SuccessStory() {
  return (
    <section className="bg-[#202124] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-12">
          What success looks like
        </h2>

        {/* Story Card Container */}
        <div className="max-w-2xl">
          {/* Card Media Preview */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#2d2e30] aspect-[16/9] border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
              alt="Business Owner working on laptop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="mt-8 text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
            “With Atkyn, even small businesses like us can think big.”
          </blockquote>

          {/* Owner Details */}
          <div className="mt-3">
            <p className="text-xs text-gray-300 font-medium">Syreeta Levy</p>
            <p className="text-xs text-gray-400">Founder and owner, Levy & Co</p>
          </div>
        </div>

        {/* Small Bottom Disclaimer */}
        <p className="text-[10px] text-gray-500 mt-14">
          Performance statistics are specific to this advertiser and individual results may vary.
        </p>
      </div>
    </section>
  );
}