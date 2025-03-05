import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col w-45">
      <p className="text-sm">DUE DATE</p>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-white">Start Date</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="border border-gray-300 rounded-md pl-1 w-23 text-gray-700 text-sm focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-white">End Date</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || undefined}
          className="border border-gray-300 rounded-md pl-1 w-23 text-gray-700 text-sm focus:ring focus:ring-blue-300"
        />
      </div>
      {startDate && endDate && (
        <p className="text-sm font-semibold text-gray-600">
          Selected: {startDate.toDateString()} - {endDate.toDateString()}
        </p>
      )}
    </div>
  );
};

export default DateRangePicker;
