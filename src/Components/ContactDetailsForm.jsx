import React, { useState } from 'react';

function ContactDetailsForm({ onNext, onSkip, onBack }) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    website: '',
    chatMethod: 'Text message',
    chatPhoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-12 max-w-5xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBack} 
        className="self-start text-2xl text-gray-700 hover:text-black cursor-pointer"
      >
        ←
      </button>

      <div className="max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">
          What contact details do you want to show to customers?
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Help customers get in touch by including this info on your listing
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Phone Number with Country Flag Box */}
          <div className="flex border border-gray-400 rounded-md overflow-hidden focus-within:border-blue-600">
            <div className="flex items-center gap-1 px-3 bg-gray-50 border-r border-gray-300">
              <span className="text-lg">🇮🇳</span>
              <span className="text-xs text-gray-500">▼</span>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-3 outline-none text-sm"
            />
          </div>

          {/* Website (optional) */}
          <div className="border border-gray-400 rounded-md overflow-hidden focus-within:border-blue-600">
            <input
              type="url"
              name="website"
              placeholder="Website (optional)"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-3 outline-none text-sm"
            />
          </div>

          {/* Add Chat (optional) */}
          <div className="mt-2">
            <h3 className="font-semibold text-gray-800 text-base">Add chat (optional)</h3>
            <p className="text-xs text-gray-600 mb-4">
              Allow customers to chat with your business via SMS or other apps{' '}
              <a href="#" className="text-blue-600 hover:underline">Learn more</a>
            </p>

            {/* Chat Type Dropdown */}
            <div className="border border-gray-400 rounded-md p-2 mb-3">
              <label className="block text-[11px] text-gray-500">Chat</label>
              <select
                name="chatMethod"
                value={formData.chatMethod}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-sm"
              >
                <option value="Text message">💬 Text message</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>

            {/* Contact Phone Number for Chat */}
            <div className="flex border border-gray-400 rounded-md overflow-hidden focus-within:border-blue-600">
              <div className="flex items-center gap-1 px-3 bg-gray-50 border-r border-gray-300">
                <span className="text-lg">🇮🇳</span>
                <span className="text-xs text-gray-500">▼</span>
              </div>
              <input
                type="tel"
                name="chatPhoneNumber"
                placeholder="Contact phone number"
                value={formData.chatPhoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={onSkip}
              className="px-5 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Skip
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium cursor-pointer"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactDetailsForm;