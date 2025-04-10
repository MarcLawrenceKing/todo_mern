import React, { useEffect, useState } from "react";
import TestCreate from "../components/TestCreate";
import axios from "axios";

interface Todo {
  _id: string;
  task: string;
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
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Test Todo List </h1>
      <TestCreate />
      {todos.length === 0 ? (
        <div>
          <p>Walang laman!!</p>
        </div>
      ) : (
        todos.map((todo) => <div key={todo._id}>{todo.task}</div>)
      )}
    </div>
  );
};

export default Test;
