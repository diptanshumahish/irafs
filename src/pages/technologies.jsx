import Head from "next/head"
import Link from "next/link"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"
import t from '@/styles/technologies.module.css'
import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";
export default function Technologies() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return (
        <>
            <Head>
                <title>Technologies @IRA</title>
            </Head>
            <Navbar />
            <main>
                <div id={t.tech}>

                    <div id={t.section1}>
                        <div id={t.techHead} data-aos="fade-up">
                            <div id={t.tophead}>STAFFING SOLUTIONS</div>
                            <div id={t.cta}>
                                Contact Us.
                            </div>
                        </div>

                        <div id={t.cont} data-aos="fade-up" data-aos-delay="200">

                            The workforce is an asset for every organization. <span>IRA FS </span>
                            understands it and pay great heed to the clients staffing needs.
                            Our team works <span>efficiently</span> in providing talented and qualified workforce
                            for our clients, which fully meets the staffing criteria.
                            This also empowers to choose a <span>reliable work force</span> within
                            a budget. At <span>IRA FS </span>
                            every candidate is tested on his abilities, strength, and weakness,
                            retaining and referring the best aspirant for the job, thus ensure
                            an optimistic and successful future for both the client and the candidate.
                        </div>
                    </div>

                    <div id={t.offer}>
                        <div id={t.offerHead}>
                            WE OFFER THE FOLLOWING TECH STACKS:
                        </div>
                        <div id={t.techCards}  >
                            {/* 1 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        Java
                                    </div>
                                    <Image src='/assets/tech/java.svg' height={50} width={50} alt='java' />

                                </div>
                            </Link>
                            {/* 2 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        Python
                                    </div>
                                    <Image src='/assets/tech/python.svg' height={50} width={50} alt='python' />
                                </div>
                            </Link>
                            {/* 3 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        .NET Developer
                                    </div>
                                    <Image src='/assets/tech/net.svg' height={50} width={50} alt='.net' />
                                </div>
                            </Link>
                            {/* 4 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        iOS Developer
                                    </div>
                                    <Image src='/assets/tech/ios.svg' height={50} width={50} alt='ios' />
                                </div>
                            </Link>
                            {/* 5 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        Azure
                                    </div>
                                    <Image src='/assets/tech/azure.svg' height={50} width={50} alt='azure' />
                                </div>
                            </Link>
                            {/* 6 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        AWS
                                    </div>
                                    <Image src='/assets/tech/aws.svg' height={50} width={50} alt='aws' />
                                </div>
                            </Link>
                            {/* 7 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        React JS
                                    </div>
                                    <Image src='/assets/tech/react.svg' height={50} width={50} alt='react' />
                                </div>
                            </Link>
                            {/* 8 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        UI/UX
                                    </div>
                                    <Image src='/assets/tech/ui.svg' height={50} width={50} alt='ui' />
                                </div>
                            </Link>
                            {/* 9 */}
                            <Link href='/contactus'>

                                <div className={t.techCard} data-aos="flip-right">
                                    <div className={t.techCardHead}>
                                        Cyber Security
                                    </div>
                                    <Image src='/assets/tech/cyber.svg' height={50} width={50} alt='cyybersecurity' />
                                </div>
                            </Link>
                        </div>
                        <div id={t.manymore}>
                            & many more, <Link href='/contactus'>
                                <span>Let&apos;s Talk</span></Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}