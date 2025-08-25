import React, { useState } from "react";
import curries from "./curries";

export default function CurriesAccordion({ selectedCurries, setSelectedCurries }) {
  const [openCategory, setOpenCategory] = useState(null);

  // Toggle checkbox selection
  const toggleSelection = (id) => {
    setSelectedCurries((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id, spice: "Normal" }];
      }
    });
  };

  // Update spice level for a selected item
  const updateSpice = (id, spice) => {
    setSelectedCurries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, spice } : item))
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow rounded-lg">
      {curries.map((category) => (
        <div key={category.id} className="border-b border-gray-300">
          {/* Accordion Header */}
          <button
            type="button"
            onClick={() =>
              setOpenCategory(openCategory === category.id ? null : category.id)
            }
            className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800"
          >
            {category.title}
            <span>{openCategory === category.id ? "−" : "+"}</span>
          </button>

          {/* Accordion Content */}
          {openCategory === category.id && (
            <div className="p-2 sm:p-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 items-stretch">
                {category.items.map((item) => {
                  const isSelected = selectedCurries.some(
                    (curry) => curry.id === item.id
                  );
                  const selectedItem = selectedCurries.find(
                    (curry) => curry.id === item.id
                  );

                  return (
                    <div
                      key={item.id}
                      className="border rounded-lg shadow-sm p-2 sm:p-4 flex flex-col bg-gray-50 h-full hover:shadow-lg transition-shadow duration-300"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-24 sm:h-32 md:h-40 lg:h-40 sm:object-cover object-cover rounded-md mb-2 sm:mb-3"
                        />
                      )}

                      {/* Selection + Item Details */}
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        {/* Checkbox */}
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelection(item.id)}
                          className="h-5 w-5 sm:h-6 sm:w-6 mt-0 text-green-600"
                        />

                        {/* Item Name */}
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-semibold text-gray-800">
                            {item.name}
                          </p>
                        </div>
                      </div>

                      {/* Spice Selector (Only show if selected) */}
                      {isSelected && (
                        <div className="mt-2 sm:mt-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Spice Level:
                          </label>
                          <select
                            value={selectedItem?.spice || "Normal"}
                            onChange={(e) =>
                              updateSpice(item.id, e.target.value)
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          >
                            <option value="Less Spicy">Less Spicy</option>
                            <option value="Normal">Normal</option>
                            <option value="More Spicy">More Spicy</option>
                          </select>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
