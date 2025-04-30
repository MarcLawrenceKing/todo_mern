import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState<string>("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="border border-black"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTask(e.target.value)
        }
      />
      <button className="bg-black text-white p-2" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
