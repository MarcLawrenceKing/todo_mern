import { FC } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import RadioBtnGroup from "../components/RadioBtnGroup";
import DateRangePicker from "./DateRangePicker";
import { useState } from "react";
import SearchInput from "../components/SearchInput";

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
  const [selectedPriority, setSelectedPriority] = useState<string>("high");
  const [selectedStatus, setSelectedStatus] = useState<string>("pending");

  const [openFiltersSection, setOpenFiltersSection] = useState<boolean>(false);

  return (
    <div className="w-72 h-auto bg-secondary text-white p-3 rounded-xl transition-all">
      <div
        className="flex flex-row justify-between items-center"
        onClick={() => setOpenFiltersSection(!openFiltersSection)}
      >
        <p className="text-base"> Filters</p>
        {openFiltersSection ? (
          <DynamicIcon name="chevron-down" size={20} />
        ) : (
          <DynamicIcon name="chevron-up" size={20} />
        )}
      </div>

      {openFiltersSection && (
        <div>
          <div className="grid grid-cols-3 gap-3 justify-center mt-2">
            <RadioBtnGroup
              options={[
                { value: "pending", label: "Pending" },
                { value: "ongoing", label: "Ongoing" },
                { value: "finished", label: "Finished" },
              ]}
              selected={selectedStatus}
              onChange={setSelectedStatus}
              name="STATUS"
            />
            <RadioBtnGroup
              options={[
                { value: "high", label: "High" },
                { value: "medium", label: "Medium" },
                { value: "low", label: "Low" },
              ]}
              selected={selectedPriority}
              onChange={setSelectedPriority}
              name="PRIORITY"
            />

            <SearchInput />
          </div>
          <div className="flex justify-start mt-2">
            <DateRangePicker />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
