// src/components/FilterButtons.jsx
import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  const filters = ['All', 'Completed', 'Pending'];

  return (
    <div className="flex space-x-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded ${
            filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

