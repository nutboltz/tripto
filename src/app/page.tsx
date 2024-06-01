import Image from "next/image";
import CreateTripForm from "./components/createTripForm";

export default function Home() {
  return (
    <main>
      <div className="flex gap-16">
        {/* populate trips on left side */}
        <div>trips</div>
        < CreateTripForm />
      </div>
    </main>
  );
}
