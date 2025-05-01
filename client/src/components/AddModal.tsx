import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/api/todo", {
        title,
        description,
        status,
        dueDate,
        priority,
      })
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-2">
      <div className="flex flex-col gap-2 bg-white p-6 rounded ">
        <Input
          type="text"
          placeholder="Enter title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <Textarea
          placeholder="Enter Description"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        <Input
          type="date"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDueDate(e.target.value)
          }
        />

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="-- Select status --" />
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

        <Select value={priority} onValueChange={setPriority}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="-- Select priority --" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priority</SelectLabel>
              <SelectItem value="LOW">LOW</SelectItem>
              <SelectItem value="MEDIUM">MEDIUM</SelectItem>
              <SelectItem value="HIGH">HIGH</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="destructive">
            Cancel
          </Button>
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddModal;
