import React, { useState } from "react";
import riceBiryanis from "./biryani";

export default function BiryanisAccordion({
  selectedBiryanis,
  setSelectedBiryanis,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleSelection = (id) => {
    setSelectedBiryanis(
      (prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id)
          : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow rounded-lg">
      {riceBiryanis.map((category) => (
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
                {category.items.map((item) => (
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
                    <div className="flex items-start space-x-2 sm:space-x-3 mt-auto">
                      <input
                        type="checkbox"
                        checked={selectedBiryanis.includes(item.id)}
                        onChange={() => toggleSelection(item.id)}
                        className="h-5 w-5 sm:h-6 sm:w-6 mt-1 text-green-600"
                      />

                      <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-800">
                          {item.name}
                        </p>
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
