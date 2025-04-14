import { useEffect, useState } from "react";
import TestCreate from "../components/TestCreate";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import TestAddModal from "../components/TestAddModal";

interface Todo {
  _id: string;
  task: string;
  done: string;
}

const Test1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-blue-600 text-white rounded"
      >
        + Add
      </button>
      <TestAddModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Test1;
