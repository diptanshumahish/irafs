import a from '@/styles/aboutus.module.css'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";
export default function AboutUs() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return (
        <>

            <Head>
                <title>About Us @IRA</title>
            </Head>
            <Navbar />
            <main>
                <div id={a.abtUs}>
                    <div id={a.head} data-aos="fade-up">
                        ABOUT US
                    </div>
                    <div id={a.top}>
                        <div className={a.cardleft}>
                            <div className={a.card} data-aos="fade-up" data-aos-delay="100">
                                <div className={a.cardHead} >
                                    OUR MISSION
                                </div>
                                <div className={a.cardDet}>
                                    Our mission is to build centres of excellence that foster a high-quality experience for our clients and partners through the highest standards of ethics,
                                    quality, and mutual respect. Our seasoned team of recruiters uses cutting-edge technology and subject-matter experience to offer outstanding talent to our clients.
                                    When it comes to finding the best personnel, whether you are an established firm or an experienced professional, we can be your go-to source.
                                </div>
                            </div>
                            {/* secomd  */}

                            <div className={a.card} data-aos="fade-up" data-aos-delay="200">
                                <div className={a.cardHead}>
                                    OUR VISION
                                </div>
                                <div className={a.cardDet}>
                                    We strive to provide our customers with the best possible service that meets all of their requirements. We are working to redefine the employment
                                    and consulting sector dynamics as a strong, service-first, trusted globally.
                                </div>
                            </div>
                        </div>
                        <div id={a.cardRight}>

                            <Image src='/assets/images/abt.svg' width={500} height={500} alt="about us" id={a.img} />
                        </div>
                    </div>


                </div>
                <div id={a.key}>
                    <div id={a.keyHead}>
                        OUR KEY FEATURES
                    </div>
                    <div id={a.keyCards}>
                        <ul>
                            <li> 🎈Hassle-free business solutions that you can rely on.</li>
                            <li>🎈 We believe in “Clients success is our success”.</li>
                            <li> 🎈At IRA fs talent meets appreciation and wonders occur</li>
                            <li> 🎈Our promises are not vague ones, we actually fulfil them</li>
                        </ul>
                    </div>
                </div>
                <div id={a.talk}>
                    <div id={a.tk}>Feeling inspired?</div>
                    <Link href='/contactus'>
                        <div id={a.cta}>Let&apos;s Talk</div></Link>
                </div>
            </main>
            <Footer />
        </>
    )
}