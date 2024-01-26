import { Todo, columns } from "./columns";
import { DataTable } from "./data-table";

// (server component) is where we'll fetch data and render our table.

async function getData(): Promise<Todo[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      priority: "High",
      status: "In Progress",
      title: "We need to program the back-end THX pixel!",
      task: "TASK-1",
    },
    {
      id: "489e1d42",
      priority: "Low",
      status: "Backlog",
      title: "Try to transmit the XSS monitor, maybe it will hack the optical firewall!",
      task: "TASK-2",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
