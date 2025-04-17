import { useEffect, useState } from "react";
import TestCreate from "../components/TestCreate";
import axios from "axios";

import TestAddModal from "../components/TestAddModal";
import TestTodo from "../components/TestTodo";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

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
    <>
      <Header />
      <div className="flex flex-col justify-center items-center py-10">
        <Button onClick={() => setOpen(true)} size="lg" className="mb-10">
          <p className="text-xl">+ Add To Do</p>
        </Button>
        <TestAddModal isOpen={open} onClose={() => setOpen(false)} />
        <div
          className={`grid grid-cols-1 ${
            todos.length > 0 ? "gap-5 md:grid-cols-2 todo3:grid-cols-3" : ""
          }`}
        >
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
      </div>
    </>
  );
};

export default Test1;
