import { formSchema } from "@/components/ui/shared/TodoInput";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type Todo = {
  id: number;
  todo: string;
  time: string;
};

export type TodoInput = {
  todo: string;
  time: string;
};

export type OnSubmit = {
  onSubmit: (todo: TodoInput) => void;
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

export type DeleteTodo = {
  handleDelete: (id: number) => void;
};

export type TodoContainerProps = {
  currTodo: Todo[];
  handleDelete: (id: number) => void;
};
