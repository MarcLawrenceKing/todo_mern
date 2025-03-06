import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div>
      <div className="w-45 mb-2">
        <p className="text-sm">RANGE (DUE DATE)</p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm text-white">START DATE</p>
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
          <p className="text-sm text-white">END DATE</p>
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
      </div>
      {/* {startDate && endDate && (
        <p className="text-sm font-semibold text-gray-300">
          Selected: {startDate.toDateString()} - {endDate.toDateString()}
        </p>
      )} */}
    </div>
  );
};

export default DateRangePicker;
