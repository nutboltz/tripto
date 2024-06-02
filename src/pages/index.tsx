import CreateTripForm from '@/components/createTripForm';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  const onSubmit = (tripId: string) => {
    router.push(`/trip/${tripId}`)
  }

  return (
    <main>
      <div className={`p-20 flex gap-16 relative ${inter.className}`}>
        <div className="bg-[#D5AEE4] opacity-15 absolute -top-[10rem] right-[0rem] h-[40rem] w-[40rem] rounded-full blur-[7rem] z-0"></div>
        <div className="bg-[#AEC7E4] opacity-15 absolute -bottom-[10rem] left-[0rem] h-[75rem] w-[75rem] rounded-full blur-[7rem] z-0"></div>
        <div>Your trip</div>
        < CreateTripForm onSubmit={onSubmit}/>
      </div>
    </main>
  );
}
