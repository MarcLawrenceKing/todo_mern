import { FC } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import RadioBtnGroup from "../components/RadioBtnGroup";
import DateRangePicker from "./DateRangePicker";
import { useState } from "react";

// interface BtnProps {
//   label?: string;
//   onClick?: () => void;
//   variant?: "primary" | "secondary" | "danger";
//   iconName?: any;
//   className?: string;
// }

// const Filters: FC<BtnProps> = (
//   {
//     iconName,
//     label,
//     onClick,
//     variant = "primary",
//     className,
//   }

const Filters = () => {
  const [selectedValue, setSelectedValue] = useState<string>("option1");
  return (
    <div className="w-72 h-auto bg-secondary text-white p-3 rounded-xl">
      <div className="flex flex-row justify-between items-center mb-2">
        <p className="text-base"> Filters</p>
        <DynamicIcon name="triangle" size={15} />
      </div>
      <div className="flex flex-row gap-3 justify-center mb-2">
        <RadioBtnGroup
          options={[
            { value: "pending", label: "Pending" },
            { value: "ongoing", label: "Ongoing" },
            { value: "finished", label: "Finished" },
          ]}
          selected={selectedValue}
          onChange={setSelectedValue}
          name="STATUS"
        />
        <RadioBtnGroup
          options={[
            { value: "high", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" },
          ]}
          selected={selectedValue}
          onChange={setSelectedValue}
          name="PRIORITY"
        />
        <p className="text-sm">SEARCH</p>
      </div>
      <div className="flex justify-center">
        <DateRangePicker />
      </div>
    </div>
  );
};

export default Filters;
