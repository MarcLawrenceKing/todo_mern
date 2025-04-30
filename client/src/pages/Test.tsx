import { useEffect, useState } from "react";
import TestCreate from "../components/Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

interface Todo {
  _id: string;
  task: string;
  done: string;
}

const Test = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // to fetch the data from mongodb local
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id: string) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: string) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Test Todo List </h1>
      <TestCreate />
      {todos.length === 0 ? (
        <div>
          <p>Walang laman!!</p>
        </div>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex items-center gap-5 bg-secondary p-2 mb-2"
          >
            <div
              className="flex items-center gap-2"
              onClick={() => handleEdit(todo._id)}
            >
              {todo.done ? (
                <BsFillCheckCircleFill className="text-primary" />
              ) : (
                <BsCircleFill className="text-primary" />
              )}
              {todo.task}
            </div>
            <BsFillTrashFill onClick={() => handleDelete(todo._id)} />
          </div>
        ))
      )}
    </div>
  );
};

export default Test;
