export type TodoStatus = "PENDING" | "DONE" | "ONGOING";
export type TodoPriority = "HIGH" | "MEDIUM" | "LOW";

export interface TodoStatusObject {
  status: TodoStatus;
  label: string;
  textColor: string;
  bgColor: string;
}

export interface TodoPriorityObject {
  priority: TodoPriority;
  label: string;
  textColor: string;
  bgColor: string;
}

export const todoStatuses: TodoStatusObject[] = [
  {
    status: "PENDING",
    label: "PENDING",
    textColor: "text-white font-semibold",
    bgColor: "bg-accent3",
  },
  {
    status: "ONGOING",
    label: "ONGOING",
    textColor: "text-black font-semibold",
    bgColor: "bg-secondary",
  },
  {
    status: "DONE",
    label: "DONE",
    textColor: "text-white font-semibold",
    bgColor: "bg-primary",
  },
];

export const todoPriorities: TodoPriorityObject[] = [
  {
    priority: "HIGH",
    label: "HIGH",
    textColor: "text-white font-semibold",
    bgColor: "bg-accent3",
  },
  {
    priority: "MEDIUM",
    label: "MEDIUM",
    textColor: "text-black font-semibold",
    bgColor: "bg-secondary",
  },
  {
    priority: "LOW",
    label: "LOW",
    textColor: "text-white font-semibold",
    bgColor: "bg-primary",
  },
];

export interface TodoProps {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  dueDate: string;
  priority: TodoPriority;
  createdAt: string;
  updatedAt: string;
  onDelete?: () => void
}