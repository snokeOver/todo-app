"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../button";
import { TodoContainerProps } from "@/app/types_Interfaces/types";

const TodoContainer = ({ currTodo, handleDelete }: TodoContainerProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Target Details</TableHead>
          <TableHead>Allocated Hours</TableHead>
          <TableHead>Status</TableHead>

          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currTodo.length > 0 &&
          currTodo.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">#{index + 1}</TableCell>
              <TableCell>{item.todo}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleDelete(item.id)}
                  variant={"destructive"}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TodoContainer;
