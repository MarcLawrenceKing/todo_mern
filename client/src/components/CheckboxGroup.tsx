import { CheckIcon } from "lucide-react";
import { FC } from "react";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (value: string[]) => void;
  name: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  selected,
  onChange,
  name,
}) => {
  const handleCheckboxChange = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value) // Remove if already selected
      : [...selected, value]; // Add if not selected
    onChange(newSelected);
  };

  return (
    <div className="flex flex-col text-sm text-black md:text-base">
      <p>{name}</p>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer "
        >
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={selected.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            className="hidden"
          />
          <div
            className={`w-4 h-4 border-1 flex items-center justify-center transition-colors ${
              selected.includes(option.value) ? "bg-primary" : "border-black"
            }`}
          >
            {selected.includes(option.value) && (
              <CheckIcon className="w-4 h-4 text-white" />
            )}
          </div>
          <span className="text-black">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
