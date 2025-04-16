import { useEffect, useState } from "react";
import axios from "axios";
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

interface TodoComponentProps {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleEdit: (
    id: string,
    values: { title: string; dueDate: string; status: string }
  ) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  editValues: {
    title: string;
    dueDate: string;
    status: string;
  };
  setEditValues: (values: {
    title: string;
    dueDate: string;
    status: string;
  }) => void;
}

const TestTodo = ({
  todo,
  handleDelete,
  handleEdit,
  editingId,
  setEditingId,
  editValues,
  setEditValues,
}: TodoComponentProps) => {
  return (
    <div key={todo._id} className="border p-2">
      <div className="">
        {editingId === todo._id ? (
          <input
            value={editValues.title}
            onChange={(e) =>
              setEditValues({ ...editValues, title: e.target.value })
            }
            className="border p-1"
          />
        ) : (
          todo.title
        )}
      </div>
      <div className="">{todo.description}</div>
      <div className="">
        DUE DATE:{" "}
        {editingId === todo._id ? (
          <input
            type="date"
            value={editValues.dueDate.slice(0, 10)}
            onChange={(e) =>
              setEditValues({ ...editValues, dueDate: e.target.value })
            }
            className="border p-1"
          />
        ) : (
          todo.dueDate.slice(0, 10)
        )}
      </div>
      <div className="">
        STATUS:{" "}
        {editingId === todo._id ? (
          <select
            value={editValues.status}
            onChange={(e) =>
              setEditValues({ ...editValues, status: e.target.value })
            }
            className="border p-1"
          >
            <option value="PENDING">PENDING</option>
            <option value="ONGOING">ONGOING</option>
            <option value="DONE">DONE</option>
          </select>
        ) : (
          todo.status
        )}
      </div>
      <div className="">PRIORITY: {todo.priority}</div>
      <div className="">
        CREATED:{" "}
        {new Date(todo.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
      <div className="">
        UPDATED:{" "}
        {new Date(todo.updatedAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
      <div className="flex justify-center gap-10 mt-5">
        {editingId === todo._id ? (
          <button
            className="bg-green-500 p-2 text-white"
            onClick={() => handleEdit(todo._id, editValues)}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 p-2"
            onClick={() => {
              setEditingId(todo._id);
              setEditValues({
                title: todo.title,
                dueDate: todo.dueDate,
                status: todo.status,
              });
            }}
          >
            Update
          </button>
        )}

        <button
          className="bg-red-500 p-2 text-white"
          onClick={() => handleDelete(todo._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TestTodo;
