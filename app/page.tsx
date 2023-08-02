"use client";

import { ArrowUpDown } from "lucide-react";

import { Button } from "../components/ui/button";
import { Combobox } from "../components/ui/combobox";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-4">
      <form className="flex gap-4 flex-col">
        <div className="flex flex-col">
          <Combobox
            buttonText="From: Country, City, or Airport"
            className="border-b-0 rounded-b-none"
          />
          <Button
            size="icon"
            variant="outline"
            className="-mt-5 -mb-5 z-50 ml-auto mr-5"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Combobox
            buttonText="To: Country, City, or Airport"
            className="rounded-t-none"
          />
        </div>
      </form>
    </main>
  );
}
