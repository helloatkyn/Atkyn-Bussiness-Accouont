import React, { useState } from 'react';

function BusinessAddressForm({ onNext, onBack }) {
  const [addressData, setAddressData] = useState({
    country: 'India',
    streetAddress: '',
    city: '',
    pincode: '',
    state: ''
  });

  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(addressData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-12">
      {/* Back Button */}
      <button onClick={onBack} className="self-start text-2xl">←</button>

      <div className="max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-2">Enter your business address</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Add a location where customers can visit your business in person
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Country / Region */}
          <div className="border border-gray-400 rounded-md p-2">
            <label className="block text-xs text-gray-500">Country / Region</label>
            <select
              name="country"
              value={addressData.country}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
            >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>

          {/* Street Address */}
          <div className="border border-gray-400 rounded-md p-2">
            <label className="block text-xs text-gray-500">Street address</label>
            <input
              type="text"
              name="streetAddress"
              value={addressData.streetAddress}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* City */}
          <div className="border border-gray-400 rounded-md p-2">
            <label className="block text-xs text-gray-500">City</label>
            <input
              type="text"
              name="city"
              value={addressData.city}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Pincode */}
          <div className="border border-gray-400 rounded-md p-2">
            <label className="block text-xs text-gray-500">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={addressData.pincode}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* State */}
          <div className="border border-gray-400 rounded-md p-2">
            <label className="block text-xs text-gray-500">State</label>
            <select
              name="state"
              value={addressData.state}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              required
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 w-max mt-2"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessAddressForm;