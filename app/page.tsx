import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "./config/site";
import { cn } from "@/lib/utils";
import { Announcement } from "@/components/ui/announcement";
import { Icons } from "@/components/ui/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";
import TaskPage from "./tasks/page";

// Main page for the site
export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        {/* <Announcement /> */}
        <PageHeaderHeading>My Tasks</PageHeaderHeading>
        <PageHeaderDescription>
          Here are my tasks to complete and do for this month. Filter through
          the tasks by clicking on the buttons below.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <section className="flex flex-col">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <TaskPage />
        </div>
      </section>
    </div>
  );
}