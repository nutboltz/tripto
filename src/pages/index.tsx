import CreateTripForm from '@/components/createTripForm';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()

  const onSubmit = (tripId: string) => {
    router.push(`/trip/${tripId}`)
  }

  return (
    <main>
      <div className="flex gap-16">
        {/* populate trips on left side */}
        <div>trips</div>
        < CreateTripForm onSubmit={onSubmit}/>
      </div>
    </main>
  );
}
