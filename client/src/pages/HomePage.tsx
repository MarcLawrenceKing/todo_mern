import Button from "../components/Button";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ToDo from "../components/ToDo";
import { useState } from "react";
import AddModal from "../components/AddModal";
import { TodoProps } from "../utils/todoConstants";
import { v4 as uuidv4 } from "uuid";
import DeleteModal from "../components/DeleteModal";
import { useLocalStorage } from "usehooks-ts";

const HomePage = () => {
  // add modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [todos, setTodos] = useLocalStorage<TodoProps[]>("todos", []); // creation of to do

  // delete modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<string | null>(null);

  const handleSave = (newTodo: TodoProps) => {
    setTodos([...todos, { ...newTodo, id: uuidv4() }]); // add new todo to state
    setIsAddModalOpen(false); //close modal
  };

  const confirmDelete = (id: string) => {
    setTodoToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (todoToDelete) {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== todoToDelete)
      );
      setIsDeleteModalOpen(false);
      setTodoToDelete(null);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-accent1 flex flex-col gap-5 pt-4 px-6 md:px-10">
        <div className="flex flex-row justify-between">
          <p className="text-base text-black">Hello, User!</p>
          <p className="text-base text-black"> Date</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Button
            label="Add To-Do"
            iconName="circle-plus"
            onClick={() => setIsAddModalOpen(true)}
            className="text-low-done-bg bg-primary"
          />
          <AddModal
            isOpen={isAddModalOpen}
            onClose={() => {
              setIsAddModalOpen(false);
            }}
            onSave={handleSave}
          />
          <Filters />
          <div
            className={`grid grid-cols-1 ${
              todos.length > 0 ? "gap-5 md:grid-cols-2 todo3:grid-cols-3" : ""
            }`}
          >
            {todos.length > 0 ? (
              todos.map((todo) => (
                <ToDo
                  key={todo.id}
                  {...todo}
                  onDelete={() => confirmDelete(todo.id)}
                />
              ))
            ) : (
              <p className="bg-accent2 rounded-xl p-5 text-white text-sm md:text-base md:px-50">
                Your ToDo list is empty!
              </p>
            )}
          </div>
        </div>
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
        />
      </div>
    </>
  );
};

export default HomePage;
