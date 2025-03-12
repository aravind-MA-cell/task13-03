import React, { useState } from "react";
import '../App.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  
  const options = ["Booking Details", "Plan confirmation", "Site visits", "Payment History", "Events"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    setSelectedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  console.log("Selected items: ", selectedItems.join(","));
  
  return (
    <div className="dropdown-parent">
      <button onClick={toggleDropdown} className="select-button">
        {isOpen ?  <IoMdArrowDropup className="dropdown-icon"/> : <IoMdArrowDropdown className="dropdown-icon" />}
      </button>

      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <label key={option} className="dropdown-options">
              <input
                type="checkbox"
                checked={selectedItems.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
