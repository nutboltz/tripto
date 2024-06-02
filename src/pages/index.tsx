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
      <div className={`py-20 px-32 flex flex-col gap-10 relative ${inter.className}`}>
        <div className="bg-[#D5AEE4] opacity-15 absolute -top-[10rem] -right-[10rem] h-[40rem] w-[40rem] rounded-full blur-[7rem] z-0"></div>
        <div className="bg-[#AEC7E4] opacity-15 absolute top-[20rem] -left-[10rem] h-[75rem] w-[75rem] rounded-full blur-[7rem] z-0"></div>
        <h1 className="font-semibold text-4xl z-10">Your trip</h1>
        <div className="z-10">
          < CreateTripForm onSubmit={onSubmit}/>
        </div>
      </div>
    </main>
  );
}
