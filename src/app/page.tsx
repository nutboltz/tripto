import Image from "next/image";
import CreateTripForm from "./components/createTripForm";
import TripDetailsForm from "./components/TripDetailsFrom";

export default function Home() {
  return (
    <main>
      <div className="flex gap-16">
        {/* populate trips on left side */}
        <div>trips</div>
        < CreateTripForm />
        < TripDetailsForm />
      </div>
    </main>
  );
}
