import React, { useState } from 'react';

function BusinessNameForm({ onContinue }) {
  const [businessName, setBusinessName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (businessName.trim()) {
      onContinue(businessName);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 gap-12 max-w-5xl mx-auto">
      {/* Left side Phone preview dummy */}
      <div className="hidden md:flex flex-col items-center justify-center w-72 h-[450px] border-4 border-gray-200 rounded-[35px] p-4 shadow-md bg-gray-50">
        <div className="w-12 h-1 bg-gray-300 rounded-full mb-6"></div>
        <span className="text-xl font-bold text-blue-600 mb-2">Atkyn</span>
        <div className="w-full bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-blue-600 truncate">
            {businessName || 'Your Business Name'}
          </p>
          <div className="text-xs text-yellow-500">★★★★★</div>
        </div>
      </div>

      {/* Right side Form */}
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-normal text-gray-900 mb-3">
          Get your business discovered on Atkyn Search, Maps and more
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Enter a few business details to get started
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative border border-blue-600 rounded-md px-3 pt-2 pb-1.5 focus-within:ring-1 focus-within:ring-blue-600">
            <label className="text-xs text-blue-600 font-medium block">
              Business name*
            </label>
            <input
              type="text"
              required
              placeholder="e.g. abc store"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full text-base outline-none bg-transparent pt-1 text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-max px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition cursor-pointer"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessNameForm;