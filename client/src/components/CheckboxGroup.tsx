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
    <div className="flex flex-col text-sm text-white md:text-base">
      <p>{name}</p>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer"
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
            className={`w-4 h-4 border-2 flex items-center justify-center transition-colors ${
              selected.includes(option.value)
                ? "bg-accent2 border-accent2"
                : "border-bgcolor"
            }`}
          >
            {selected.includes(option.value) && (
              <div className="w-2 h-2 bg-accent1 rounded-sm" />
            )}
          </div>
          <span className="text-white">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
