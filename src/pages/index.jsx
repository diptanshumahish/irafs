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
        <meta name="description" content="IRA Future Solutions | The best staffing and hiring solutions for you at the cheapest prices! " />
        <meta name="keywords" content="IRA Future Solutions, IRAfs, IRAFS, staffing and hiring, developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='author' content='Diptanhu Mahish' />
        <meta name="theme-color" content="#559a55" />
        <meta
          property="og:image"
          content="https://irafs.com/assets/bannerblack.png" />

        {/* facebook */}
        <meta property="og:url" content="https://irafs.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IRA Future Solutions." />
        <meta property="og:description" content="IRA Future Solutions | The best staffing and hiring solutions for you at the cheapest prices! " />
        <meta property="og:image" content="https://irafs.com/assets/bannerblack.png" />

        {/* twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="irafs.vercel.app" />
        <meta property="twitter:url" content="https://irafs.com/" />
        <meta name="twitter:title" content="IRA Future Solutions." />
        <meta name="twitter:description" content="IRA Future Solutions | The best staffing and hiring solutions for you at the cheapest prices! " />
        <meta name="twitter:image" content="https://irafs.com/assets/bannerblack.png" />

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
