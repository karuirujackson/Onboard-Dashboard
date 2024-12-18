'use client'

import Image from "next/image";
import { SetStateAction, useState } from "react";
import DropDownIcon from '../../../../../public/assets/DropDown.svg';

const SelectProject = () => {
    const [isOpen, setIsOpen ] = useState(false);

    const [selectOption, setSelectOption] = useState('Byte Tasks');

    const toggleDropDown = () => setIsOpen(!isOpen);

    const handleSelect = (option: SetStateAction<string>) => {
        setSelectOption(option);
        setIsOpen(false);
    };
   
  return (
        <div className="flex flex-col max-w-md gap-6">
            <p className="text-xl leading-8 font-semibold text-[#000]">Select your Preferred Project</p>
            <button onClick={toggleDropDown} className="flex items-center justify-between px-4 py-2 border border-[#E0E0E0] rounded-md shadow-sm text-[#1F2937] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span>{selectOption}</span>
                <Image src={DropDownIcon} alt=""  className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {/* Dropdown Menu Open */}
            {isOpen && (
                <ul className=" mt-1 bg-white border border-[#E0E0E0] rounded-md shadow-lg">
                    <li onClick={() => handleSelect("Byte Tasks")} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                        Byte Tasks
                    </li>
                    <li onClick={() => handleSelect("Alpha Tasks")} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                        Alpa Tasks
                    </li>
                    <li onClick={() => handleSelect("Gamma Tasks")} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                        Gamma Tasks
                    </li>
                </ul>
            )}
        </div>
    );
};

export default SelectProject;
