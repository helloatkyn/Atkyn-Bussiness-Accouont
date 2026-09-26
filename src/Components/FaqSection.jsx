import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is a Business Profile on Atkyn free?',
      answer:
        'Yes, creating and managing a Business Profile on Atkyn is completely free. It allows you to manage how your business appears on Atkyn Search and Maps without any cost.',
    },
    {
      question: 'How do I manage my Business Profile?',
      answer:
        'You can manage your Business Profile directly from Atkyn Search or Atkyn Maps. Just sign in to the Atkyn Account you use to manage your business and search for your business name.',
    },
    {
      question: 'Can I manage a Business Profile without a physical address?',
      answer:
        'Yes, service-area businesses that deliver or visit customers directly can have a profile without showing their physical address publicly on Maps.',
    },
    {
      question: 'How does a Business Profile help my business get discovered?',
      answer:
        'A verified Business Profile helps local customers find your opening hours, phone number, website, directions, photos, and reviews whenever they search for products or services you provide.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight text-center mb-16">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-gray-200 transition-all duration-300 bg-white ${
                isOpen ? 'rounded-3xl shadow-sm' : 'rounded-full'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-8 py-5 text-left transition-colors"
              >
                <span className="text-sm md:text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl font-light text-gray-500 transition-transform duration-300 ml-4 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-8 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}