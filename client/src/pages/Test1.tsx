import { useEffect, useState } from "react";
import TestCreate from "../components/TestCreate";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import TestAddModal from "../components/TestAddModal";
import TestTodo from "../components/TestTodo";

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

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({
    title: "",
    dueDate: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todo")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete("http://localhost:3001/api/todo/" + id)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id: string) => {
    axios
      .put("http://localhost:3001/api/todo/" + id, editValues)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
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
          <TestTodo
            key={todo._id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            editingId={editingId}
            setEditingId={setEditingId}
            editValues={editValues}
            setEditValues={setEditValues}
          />
        ))
      )}
    </div>
  );
};

export default Test1;
