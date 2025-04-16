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
  title: string;
  description: string;
  dueDate: string;
  status: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
}

const Test1 = () => {
  const [open, setOpen] = useState(false);

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todo")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-blue-600 text-white rounded"
      >
        + Add
      </button>
      <TestAddModal isOpen={open} onClose={() => setOpen(false)} />
      {todos.length === 0 ? (
        <div>
          <p>Walang laman!!</p>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="border p-2">
            <div className="">{todo.title}</div>
            <div className="">{todo.description}</div>
            <div className="">{todo.dueDate}</div>
            <div className="">{todo.status}</div>
            <div className="">{todo.priority}</div>
            <div className="">{todo.createdAt}</div>
            <div className="">{todo.updatedAt}</div>
            <div className="flex justify-center gap-10 mt-5">
              <button className="bg-yellow-500 p-2">Update</button>{" "}
              <button className="bg-red-500 p-2 text-white">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Test1;
