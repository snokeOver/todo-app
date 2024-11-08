"use client";

import { OnSubmit } from "@/app/types_Interfaces/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";

export const formSchema = z.object({
  todo: z
    .string()
    .min(2, {
      message: "Todo must be at least 2 characters.",
    })
    .max(30, {
      message: "Todo must be at most 20 characters.",
    }),
  time: z
    .string()
    .min(2, {
      message: "Time must be at least 2 characters.",
    })
    .max(20, {
      message: "Time must be at most 10 characters.",
    }),
});

const TodoInput = ({ onSubmit, form }: OnSubmit) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full"
        >
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormControl className=" w-full">
                  <Input placeholder="Type a todo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormControl className=" w-full">
                  <Input placeholder="Allocated time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"outline"} type="submit" className="mx-auto">
            Add This Todo
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TodoInput;
