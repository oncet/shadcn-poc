import Image from "next/image";
import { ComboboxDemo } from "../components/ui/combobox";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-4">
      <form>
        <ComboboxDemo />
      </form>
    </main>
  );
}
