import React, { useState } from 'react';

function BusinessCategoryForm({ onNext, onBack }) {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim()) {
      onNext(category);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-12">
      {/* Back Button */}
      <button onClick={onBack} className="self-start text-2xl">←</button>

      {/* Right side form */}
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-2">Enter a business category</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Help customers discover your business by industry by adding a business category
        </p>

        <form onSubmit={handleSubmit}>
          <div className="border border-gray-400 rounded-md p-3 mb-1 focus-within:border-blue-600">
            <label className="block text-xs text-gray-500">Business category*</label>
            <input
              type="text"
              className="w-full outline-none text-base"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <p className="text-xs text-gray-500 mb-6">You can change and add more later</p>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessCategoryForm;