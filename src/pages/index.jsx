import Head from 'next/head'
import Navbar from '@/components/NavBar'
import Header from '@/components/home/Header'
import WhoAreWe from '@/components/home/WhoAreWe'
import MajorTech from '@/components/home/MajorTech'
import Recruitment from '@/components/home/Recruitment'
import Footer from '@/components/Footer'
import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <>
      <Head>
        <title>IRA Future Solutions.</title>
        <meta name="description" content="The official website for Ira Future Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <Header />
        <WhoAreWe />
        <MajorTech />
        <Recruitment />


      </main>
      <Footer />

    </>
  )
}