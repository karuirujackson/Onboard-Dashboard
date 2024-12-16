// components/DropdownButton.js
'use client'

import Image from "next/image";
import { SetStateAction, useState } from "react";
import DropDownIcon from '../../../../public/assets/DropDown.svg'

const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Byte Tasks");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: SetStateAction<string>) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

  return (
    <div className="max-w-md mx-auto my-8 relative">
        {/* Label */}
        <label className="block text-lg font-semibold text-gray-900 mb-2">
            Select your preferred project
         </label>

        {/* Button */}
        <button onClick={toggleDropdown} className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span>{selectedOption}</span>
            {/* SVG Dropdown Icon */}
            <Image src={DropDownIcon} alt="" className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
            <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <li onClick={() => handleSelect("Byte Tasks")} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                    Byte Tasks
            </li>
            <li onClick={() => handleSelect("Alpha Project")} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                    Alpha Project
            </li>
            <li onClick={() => handleSelect("Gamma Build")} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                    Gamma Build
            </li>
            </ul>
        )}
    </div>
  );
};

export default DropdownButton;
