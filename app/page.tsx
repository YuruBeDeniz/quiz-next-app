'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import HomePageImage from  "assets/home-pic.jpg";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => router.push("/quiz");

  return (
    <div className='text-center'>
      <p className='text-white p-4'>Do you have what it takes to become the React-Quiz master?</p>
      <Image className='max-w-[700px] w-full rounded-[10px]' src={HomePageImage} alt="home-page" />
      <Button text='Start Quiz' onClick={handleButtonClick} />
    </div>
  )
}
