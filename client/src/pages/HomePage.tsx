import { useEffect, useState } from "react";
import axios from "axios";

import AddModal from "../components/AddModal";
import TodoComponent from "../components/TodoComponent";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import DeleteModal from "../components/DeleteModal";

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

const HomePage = () => {
  const [open, setOpen] = useState(false); //for add modal
  const [todos, setTodos] = useState<Todo[]>([]);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // for delete modal
  const [todoDelete, setTodoDelete] = useState<string | null>(null); // the todo to be deleted

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
    priority: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todo")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  // to confirm first before deleting
  const confirmDelete = (id: string) => {
    setTodoDelete(id);
    setDeleteModalOpen(true);
  };

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
        <AddModal isOpen={open} onClose={() => setOpen(false)} />
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
              <TodoComponent
                key={todo._id}
                todo={todo}
                handleDelete={confirmDelete} //confirm first before deleting
                handleEdit={handleEdit}
                editingId={editingId}
                setEditingId={setEditingId}
                editValues={editValues}
                setEditValues={setEditValues}
              />
            ))
          )}
        </div>
        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setTodoDelete(null);
          }}
          onConfirm={() => {
            if (todoDelete) handleDelete(todoDelete);
            setDeleteModalOpen(false);
            setTodoDelete(null);
          }}
        />
      </div>
    </>
  );
};

export default HomePage;
