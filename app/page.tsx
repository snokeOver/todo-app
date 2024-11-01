"use client";

import TodoContainer from "@/components/ui/shared/TodoContainer";
import TodoInput, { formSchema } from "@/components/ui/shared/TodoInput";
import { deleteTodo, getTodos, storeTodos } from "@/lib/getSetTodos";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Todo } from "./types_Interfaces/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [currTodo, setCurrTodo] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<boolean>(false);
  const { toast } = useToast();

  // Get the fresh todos from localstroage
  useEffect(() => {
    const storedTodos: Todo[] = getTodos();
    setCurrTodo(storedTodos);
    setNewTodo(false);
  }, [newTodo]);

  // Delete todo
  const handleDelete = (id: number) => {
    deleteTodo(id);
    setNewTodo(true);
    toast({
      title: "Todo has been deleted !",
    });
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
      time: "",
    },
  });

  //2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newTodo = {
      id: Math.ceil(Math.random() * 1000000),
      todo: values.todo,
      time: values.time,
    };
    storeTodos(newTodo);
    setNewTodo(true);
    toast({
      title: "Todo has been added !",
    });
    form.reset();
  };

  return (
    <main className="container mx-auto min-h-screen">
      <div className="my-6 md:my-16 px-3 md:px-8 flex flex-col gap-6 md:gap-10">
        <TodoContainer currTodo={currTodo} handleDelete={handleDelete} />
        <div className="mt-10">
          <TodoInput onSubmit={onSubmit} form={form} />
        </div>
      </div>
    </main>
  );
}
