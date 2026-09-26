export default function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Create",
      description:
        "Share your business details to get started on Atkyn or claim an existing profile on Search and Maps.",
      // Organic scalloped badge shape for step 1
      shapeClass: "rounded-[32%_68%_55%_45%/48%_38%_62%_52%]",
    },
    {
      number: "2",
      title: "Personalise",
      description:
        "Add your hours, photos, and other essential information to get discovered by customers near you.",
      // Organic pebble badge shape for step 2
      shapeClass: "rounded-[60%_40%_50%_50%/50%_60%_40%_50%]",
    },
    {
      number: "3",
      title: "Grow",
      description:
        "Share offers and updates, respond to reviews, and connect with customers across Atkyn.",
      // Smooth squircle badge shape for step 3
      shapeClass: "rounded-[40%_40%_40%_40%]",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto text-center">
      {/* 1. Header & Description */}
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
        Profile in 3 simple steps
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Build a standout profile on Atkyn Search and Maps in minutes.
      </p>

      {/* 2. Top CTA Button */}
      <button className="mt-8 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-sm md:text-base px-8 py-3 rounded-full transition-all shadow-sm hover:shadow-md">
        Create your profile
      </button>

      {/* 3. Three Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-20 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            {/* Organic Green Badge with Number */}
            <div
              className={`w-28 h-28 bg-[#34a853] flex items-center justify-center text-white text-5xl font-bold shadow-sm transition-transform hover:scale-105 duration-300 ${step.shapeClass}`}
            >
              {step.number}
            </div>

            {/* Step Heading */}
            <h3 className="mt-8 text-2xl md:text-3xl font-bold text-gray-900">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}