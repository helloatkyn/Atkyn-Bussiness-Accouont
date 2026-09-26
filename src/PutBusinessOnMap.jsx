import React, { useState } from 'react';

function PutBusinessOnMap({ onContinue, onBack }) {
  const [preferences, setPreferences] = useState({
    newsAndTips: false,
    surveysAndPilots: false,
  });

  const handleCheckboxChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue(preferences);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-12 max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="self-start text-2xl text-gray-700 hover:text-black cursor-pointer"
      >
        ←
      </button>

      {/* Main Content */}
      <div className="max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">
          Put your business on the map
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Start connecting with your customers across Atkyn — all in one place
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              📍
            </div>
            <span className="text-sm font-medium text-gray-800">
              Get discovered by people in your area
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              💬
            </div>
            <span className="text-sm font-medium text-gray-800">
              Respond to reviews for your business
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              📈
            </div>
            <span className="text-sm font-medium text-gray-800">
              Manage your business details across Atkyn
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Checkbox 1 */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="newsAndTips"
              checked={preferences.newsAndTips}
              onChange={handleCheckboxChange}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xs text-gray-700">
              Get news and tips about how to improve your Business Profile
            </span>
          </label>

          {/* Checkbox 2 */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="surveysAndPilots"
              checked={preferences.surveysAndPilots}
              onChange={handleCheckboxChange}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xs text-gray-700">
              Get invitations to participate in occasional surveys and pilots
            </span>
          </label>

          {/* Terms text */}
          <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
            By continuing, you’re agreeing to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Business Profile Terms of Service
            </a>
            . Your{' '}
            <a href="#" className="text-blue-600 hover:underline">
              apps data
            </a>{' '}
            will be shared with{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Business Manager
            </a>
            . The{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Atkyn Privacy Policy
            </a>{' '}
            describes how Atkyn handles your data.
          </p>

          {/* Continue Button */}
          <button
            type="submit"
            className="mt-3 w-max px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium cursor-pointer"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default PutBusinessOnMap;