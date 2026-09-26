import React, { useState } from 'react';

function BusinessTypeForm({ businessName, onNext, onBack }) {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleToggle = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (onNext) {
      onNext(selectedTypes);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-12 max-w-5xl mx-auto min-h-[70vh]">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="self-start text-2xl text-gray-700 hover:text-black cursor-pointer"
      >
        ←
      </button>

      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-normal text-gray-900 mb-2">
          Choose your business type
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Select all that apply to <span className="font-semibold text-gray-800">{businessName || 'your business'}</span>
        </p>

        <div className="flex flex-col gap-4 mb-6">
          {/* Option 1: Online retail */}
          <div
            onClick={() => handleToggle('online')}
            className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${
              selectedTypes.includes('online') ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl p-2 bg-blue-50 rounded-lg">💻</span>
              <div>
                <h4 className="font-medium text-gray-900 text-base">Online retail</h4>
                <p className="text-xs text-gray-500">Customers can purchase products through your website</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={selectedTypes.includes('online')}
              onChange={() => {}}
              className="w-5 h-5 rounded border-gray-300 text-blue-600"
            />
          </div>

          {/* Option 2: Local store */}
          <div
            onClick={() => handleToggle('store')}
            className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${
              selectedTypes.includes('store') ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl p-2 bg-blue-50 rounded-lg">🏪</span>
              <div>
                <h4 className="font-medium text-gray-900 text-base">Local store</h4>
                <p className="text-xs text-gray-500">Customers can visit your business in person</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={selectedTypes.includes('store')}
              onChange={() => {}}
              className="w-5 h-5 rounded border-gray-300 text-blue-600"
            />
          </div>

          {/* Option 3: Service business */}
          <div
            onClick={() => handleToggle('service')}
            className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${
              selectedTypes.includes('service') ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl p-2 bg-blue-50 rounded-lg">🏠</span>
              <div>
                <h4 className="font-medium text-gray-900 text-base">Service business</h4>
                <p className="text-xs text-gray-500">Your business makes visits to customers</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={selectedTypes.includes('service')}
              onChange={() => {}}
              className="w-5 h-5 rounded border-gray-300 text-blue-600"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-sm transition cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BusinessTypeForm;