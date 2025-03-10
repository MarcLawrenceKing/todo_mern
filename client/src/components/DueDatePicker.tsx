import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DueDatePickerProps {
  dueDate: Date;
  onChange: (date: Date | null) => void;
}

const DueDatePicker: FC<DueDatePickerProps> = ({ dueDate, onChange }) => {
  return (
    <div className="flex items-center space-x-3 p-2 border border-gray-300 rounded-lg shadow-md bg-white">
      <strong className="text-gray-700">Due Date:</strong>
      <DatePicker
        selected={dueDate ? new Date(dueDate) : null}
        onChange={onChange}
        showTimeSelect
        dateFormat="Pp"
        className="p-2 border rounded-md w-52 text-gray-700"
      />
    </div>
  );
};

export default DueDatePicker;
