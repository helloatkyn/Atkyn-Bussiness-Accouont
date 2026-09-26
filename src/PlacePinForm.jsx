import React from 'react';

function PlacePinForm({ onConfirm, onBack }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-12 max-w-5xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBack} 
        className="self-start text-2xl text-gray-700 hover:text-black cursor-pointer"
      >
        ←
      </button>

      {/* Main Container */}
      <div className="max-w-lg w-full">
        <h2 className="text-3xl font-normal text-gray-900 mb-2">Place your pin</h2>
        
        <p className="text-gray-600 text-sm mb-2">
          Atkyn generates directions for customers based on the position of your business' pin on the map
        </p>
        
        <p className="text-gray-600 text-sm mb-6">
          Review the placement based on your address and adjust, if necessary
        </p>

        {/* Map Preview Box */}
        <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm h-72 w-full bg-gray-100 mb-6">
          <iframe
            title="Business Map Pin"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
          />

          {/* Adjust Button over the map */}
          <button
            type="button"
            className="absolute top-4 right-4 bg-white text-gray-700 text-xs font-medium px-4 py-2 rounded shadow border border-gray-300 hover:bg-gray-50"
          >
            Adjust
          </button>
        </div>

        {/* Confirm Button */}
        <button
          onClick={onConfirm}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md text-sm cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default PlacePinForm;