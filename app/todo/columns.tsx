"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Todo = {
  id: string;
  priority: string;
  status: "In Progress" | "Backlog" | "Completed" | "Canceled";
  title: string;
  task: string;
};

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "task",
    header: "Task",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
];
