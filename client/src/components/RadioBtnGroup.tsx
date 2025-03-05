type RadioBtnGroupProps = {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
  name: string;
};

const RadioBtnGroup: React.FC<RadioBtnGroupProps> = ({
  options,
  selected,
  onChange,
  name,
}) => {
  return (
    <div className="flex flex-col text-sm text-white">
      <p>{name}</p>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div
            className={`w-3 h-3 rounded-full border-2 flex items-center justify-center transition-colors ${
              selected === option.value
                ? "bg-accent2 border-accent1"
                : "border-bgcolor"
            }`}
          >
            {selected === option.value && (
              <div className="w-1 h-1 bg-accent1 rounded-full" />
            )}
          </div>
          <span className="text-white">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioBtnGroup;
