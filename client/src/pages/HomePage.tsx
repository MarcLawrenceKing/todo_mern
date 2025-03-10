import Button from "../components/Button";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ToDo from "../components/ToDo";
import { useState } from "react";
import AddModal from "../components/AddModal";

const HomePage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 pt-4 px-6 md:px-10">
        <div className="flex flex-row justify-between">
          <p className="text-base text-white">Hello, User!</p>
          <p className="text-base text-white"> Date</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Button
            label="Add To-Do"
            iconName="circle-plus"
            onClick={() => setIsAddModalOpen(true)}
            className="text-low-done-bg bg-low-done"
          />
          <AddModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
          />
          <Filters />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 todo3:grid-cols-3">
            <ToDo
              title="Complete Project 1"
              description="Finish the React to-do app by end of the week."
              status="DONE"
              dueDate="2025-03-10T12:00:00"
              priority="HIGH"
              createdAt="2025-03-06T10:00:00"
            />
            <ToDo
              title="Complete Project 2"
              description="Finish ."
              status="PENDING"
              dueDate="2025-03-10T12:00:00"
              priority="MEDIUM"
              createdAt="202"
            />
            <ToDo
              title="Complete Project 3"
              description="Finish ."
              status="ONGOING"
              dueDate="2025-03-10T12:00:00"
              priority="LOW"
              createdAt="202"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
