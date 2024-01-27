import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import Image from "next/image";
import DemoPage from "./tasks/page";

export default function Home() {
  return (
    <main className="container relative">
      <div className="p-12">
        <NavBar />
      </div>
      <PageHeader>
        <PageHeaderHeading>Todo List - 2024</PageHeaderHeading>
        <PageHeaderDescription>
          This is a todo list project. It is a good project to learn about
          Next.js and Tailwind CSS.
        </PageHeaderDescription>
        <PageActions>
          <Button>Get started</Button>
          <Button variant={"secondary"}>Browse components</Button>
        </PageActions>
        <DemoPage />
      </PageHeader>
    </main>
  );
}
