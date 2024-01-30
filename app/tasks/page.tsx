import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "@/app/tasks/components/columns";
import { DataTable } from "@/app/tasks/components/data-table";
import { UserNav } from "@/app/tasks/components/tasks-avatar-nav";
import { taskSchema } from "@/app/tasks/data/schema";

// This page is a server component and shows information about the tasks.

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div> */}
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}

// Previous version of this file:
// import { Task, columns } from "@/app/todo/columns";
// import { DataTable } from "./data-table";

// // (server component) is where we'll fetch data and render our table.

// async function getData(): Promise<Task[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       priority: "High",
//       status: "In Progress",
//       title: "We need to program the back-end THX pixel!",
//       task: "TASK-1",
//     },
//     {
//       id: "489e1d42",
//       priority: "Low",
//       status: "Backlog",
//       title: "Try to transmit the XSS monitor, maybe it will hack the optical firewall!",
//       task: "TASK-2",
//     },
//     // ...
//   ];
// }

// export default async function TasksDemoPage() {
//   const data = await getData();

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
