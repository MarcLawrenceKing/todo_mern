import { useState } from "react";
import { FC } from "react";

type TodoStatus = "PENDING" | "COMPLETED" | "IN_PROGRESS";
type TodoPriority = "HIGH" | "MEDIUM" | "LOW";

interface TodoProps {
  title: string;
  description: string;
  status: TodoStatus;
  dueDate: string;
  priority: TodoPriority;
  createdAt: string;
}

const getPriorityColor = (priority: TodoPriority): string => {
  switch (priority) {
    case "HIGH":
      return "red";
    case "MEDIUM":
      return "orange";
    case "LOW":
      return "green";
    default:
      return "gray";
  }
};

const ToDo: FC<TodoProps> = ({
  title,
  description,
  status,
  dueDate,
  priority,
  createdAt,
}) => {
  const [updatedAt, setUpdatedAt] = useState<string>(
    new Date().toLocaleString()
  );

  return (
    <div className="w-72 h-auto bg-primary text-white text-sm p-3 rounded-xl transition-all md:text-base ">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      <div className="mt-2 text-sm">
        <p>
          <strong>Status:</strong>{" "}
          <span className="font-medium text-blue-600">{status}</span>
        </p>
        <p>
          <strong>Due Date:</strong> {new Date(dueDate).toLocaleString()}
        </p>
        <p>
          <strong>Priority:</strong>{" "}
          <span
            className="font-medium"
            style={{ color: getPriorityColor(priority) }}
          >
            {priority}
          </span>
        </p>
        <p>
          <strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {updatedAt}
        </p>
      </div>
    </div>
  );
};

export default ToDo;
