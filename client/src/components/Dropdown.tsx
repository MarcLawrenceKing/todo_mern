import { useState, FC } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface DropdownOption {
  label: string;
  textColor: string;
  bgColor: string;
}

interface DropdownProps {
  options: DropdownOption[]; // Dynamic options
  onSelect: (option: DropdownOption) => void; // Callback when an option is selected
  defaultValue?: DropdownOption;
}

const Dropdown: FC<DropdownProps> = ({ options, onSelect, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(
    defaultValue || null
  );

  const handleSelect = (option: DropdownOption) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-36 px-4 rounded-lg  ${
          selected
            ? `${selected.bgColor} ${selected.textColor}`
            : "bg-gray-600 text-white"
        } hover:brightness-90 transition`}
      >
        {selected ? selected.label : "None"}{" "}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 -mt-2 w-36 rounded-lg z-2">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 hover:brightness-90 cursor-pointer transition ${option.bgColor} ${option.textColor} hover:opacity:80`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
