import React, { useState } from "react";
import '../App.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  
  // const options = ["Booking Details", "Plan confirmation", "Site visits", "Payment History", "Events"];

   // Options as an array of objects
   const options = [
    { id: 1, label: "Booking Details"},
    { id: 2, label: "Plan Confirmation"},
    { id: 3, label: "Site Visits" },
    { id: 4, label: "Payment History"},
    { id: 5, label: "Events"}
  ];

  // Check if all options are selected
  const isAllSelected = selectedItems.length === options.length;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (optionId) => {
    setSelectedItems((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

   // Handle Select All checkbox
   const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]); // Unselect all
    } else {
      setSelectedItems(options.map((option) => option.id)); // Select all
    }
  };
  console.log(
    "Selected items: ",
    selectedItems.map((id) => {
      const selectedOption = options.find((option) => option.id === id);
      return { id: selectedOption.id, label: selectedOption.label };
    })
  );
  
  return (
    <div className="dropdown-parent">
      <button onClick={toggleDropdown} className="select-button">
        {isOpen ?  <IoMdArrowDropup className="dropdown-icon"/> : <IoMdArrowDropdown className="dropdown-icon" />}
      </button>

      {isOpen && (
        
        <div className="dropdown-list">
          {/* Select all option */}
          <label className="dropdown-options">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAll}
            />
            Select All
          </label>

          {/* Individual options */}
          {options.map((option) => (
            <label key={option.id} className="dropdown-options">
              <input
                type="checkbox"
                checked={selectedItems.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
