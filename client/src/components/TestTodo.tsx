import { useEffect, useState } from "react";
import axios from "axios";
import TestAddModal from "../components/TestAddModal";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <Card key={todo._id}>
      <div className="">
        {editingId === todo._id ? (
          <Input
            value={editValues.title}
            onChange={(e) =>
              setEditValues({ ...editValues, title: e.target.value })
            }
          />
        ) : (
          <p className="font-bold text-xl"> {todo.title}</p>
        )}
      </div>
      <div className="">{todo.description}</div>
      <div className="flex items-center gap-2">
        DUE DATE:{" "}
        {editingId === todo._id ? (
          <Input
            type="date"
            value={editValues.dueDate.slice(0, 10)}
            onChange={(e) =>
              setEditValues({ ...editValues, dueDate: e.target.value })
            }
            className="w-35"
          />
        ) : (
          todo.dueDate.slice(0, 10)
        )}
      </div>
      <div className="flex items-center gap-2">
        STATUS:{" "}
        {editingId === todo._id ? (
          <Select
            value={editValues.status}
            onValueChange={(e) => setEditValues({ ...editValues, status: e })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="PENDING">PENDING</SelectItem>
                <SelectItem value="ONGOING">ONGOING</SelectItem>
                <SelectItem value="DONE">DONE</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ) : (
          <span
            className={`font-semibold px-2 py-1 rounded ${
              todo.status === "PENDING"
                ? "text-red-600 bg-red-100"
                : todo.status === "ONGOING"
                ? "text-yellow-600 bg-yellow-100"
                : "text-green-800 bg-green-100"
            }`}
          >
            {todo.status}
          </span>
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
          <Button
            variant="todo"
            className="bg-green "
            onClick={() => handleEdit(todo._id, editValues)}
          >
            <p className="text-lg">Save</p>
          </Button>
        ) : (
          <Button
            variant="todo"
            className="bg-yellow text-black"
            onClick={() => {
              setEditingId(todo._id);
              setEditValues({
                title: todo.title,
                dueDate: todo.dueDate,
                status: todo.status,
              });
            }}
          >
            <p className="text-lg">Update</p>
          </Button>
        )}

        <Button
          variant="todo"
          className="bg-accent3"
          onClick={() => handleDelete(todo._id)}
        >
          <p className="text-lg">Delete</p>
        </Button>
      </div>
    </Card>
  );
};

export default TestTodo;
