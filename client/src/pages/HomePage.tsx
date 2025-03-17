import Button from "../components/Button";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ToDo from "../components/ToDo";
import { useState } from "react";
import AddModal from "../components/AddModal";
import { TodoProps } from "../utils/todoConstants";

const HomePage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  //creation of todo component on save
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleSave = (newTodo: TodoProps) => {
    setTodos([...todos, newTodo]); // add new todo to state
    setIsAddModalOpen(false); //close modal
  };

  const handleDelete = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
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
              todos.map((todo, index) => (
                <ToDo
                  key={index}
                  {...todo}
                  onDelete={() => handleDelete(index)}
                />
              ))
            ) : (
              <p className="bg-accent2 rounded-xl p-5 text-white text-sm md:text-base md:px-50">
                Your ToDo list is empty!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
