import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DueDatePickerProps {
  dueDate: Date;
  onChange: (date: Date | null) => void;
  isEditable: boolean;
}

const DueDatePicker: FC<DueDatePickerProps> = ({
  dueDate,
  onChange,
  isEditable,
}) => {
  return (
    <div className="flex items-center h-5 ">
      <DatePicker
        selected={dueDate ? new Date(dueDate) : null}
        onChange={onChange}
        showTimeSelect
        dateFormat="Pp"
        className={`pl-2 ${
          isEditable ? "border rounded-md text-gray-700" : ""
        } w-44 `}
        disabled={!isEditable}
      />
    </div>
  );
};

export default DueDatePicker;
