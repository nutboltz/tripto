import CreateTripForm from '@/components/createTripForm';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  const onSubmit = (tripId: string) => {
    router.push(`/trip/${tripId}`)
  }

  return (
    <main>
      <div className={`py-10 px-10 flex flex-col gap-10 relative ${inter.className}`}>
        <div className="bg-[#D5AEE4] opacity-15 absolute -top-[10rem] -right-[10rem] h-[40rem] w-[40rem] rounded-full blur-[7rem] z-0"></div>
        <div className="bg-[#AEC7E4] opacity-15 absolute top-[20rem] -left-[10rem] h-[75rem] w-[75rem] rounded-full blur-[7rem] z-0"></div>
          <div className="flex gap-4 items-center">
            <Image
              src="/logo.png"
              alt="Description of my image"
              width={46}
              height={46}
            />
            <div className="font-semibold text-2xl z-10">trippin'</div>
          </div>
        <div className="py-10 px-24 flex flex-col gap-10">
          <h1 className="font-semibold text-4xl z-10">Your trip</h1>
          <div className="z-10">
            <CreateTripForm onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    </main>
  );
}
