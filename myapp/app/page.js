import DonutList from '@/components/DonutList'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='flex-start flex-col paddings'>
    <Hero />
    
    <DonutList />
   </main>
  )
}
