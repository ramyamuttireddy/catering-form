import React, { useState } from "react";
import tiffins from "./tiffins";

export default function TiffinsAccordion({
  selectedTiffins,
  setSelectedTiffins,
}) {
  // Open the first category by default
  const [openCategory, setOpenCategory] = useState(
    tiffins.length > 0 ? tiffins[0].id : null
  );

  const toggleSelection = (id) => {
    setSelectedTiffins(
      (prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id) // remove if already selected
          : [...prev, id] // add if not selected
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow rounded-lg">
      {tiffins.map((category) => (
        <div key={category.id} className="border-b border-gray-300">
          {/* Accordion Header */}
          <button
            type="button" // <-- important to prevent scrolling
            onClick={() =>
              setOpenCategory(openCategory === category.id ? null : category.id)
            }
            className="w-full text-left px-4 py-3 bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800"
          >
            {category.title}
            <span>{openCategory === category.id ? "−" : "+"}</span>
          </button>

          {/* Accordion Content */}
          {openCategory === category.id && (
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg shadow-sm p-4 flex flex-col bg-gray-50"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-md mb-3"
                      />
                    )}

                    {/* Selection + Item Details */}
                    <div className="flex items-start space-x-3">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedTiffins.includes(item.id)}
                        onChange={() => toggleSelection(item.id)}
                        className="h-6 w-6 mt-1 text-green-600"
                      />

                      {/* Item Name & Price */}
                      <div>
                        <p className="text-base font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
