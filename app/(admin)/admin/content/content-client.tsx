"use client";

import React from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ui/cards/content-card";

interface Props {
  contents: any[];
}

const ContentClient = ({ contents }: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center justify-start gap-1">
          <div>
            <Input className="outline-none outline-border-none focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
          <div>
            <Button variant="outline">
              <Search />
            </Button>
          </div>
        </div>
        <div>
          <Button
            onClick={() => router.push("/admin/add-content")}
            variant="outline"
          >
            Add
            <span className="hidden md:block ml-1">New Content</span>
          </Button>
        </div>
      </div>
      <div>
        <div className="my-1 py-1 font-semibold text-slate-700 dark:text-slate-300">
          Founded Content: {contents.length}
        </div>
        <div className="grid sm:grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 justify-between items-center">
          {contents.map((content) => (
            <ContentCard key={content.content_id} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentClient;
