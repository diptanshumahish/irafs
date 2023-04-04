import Head from "next/head"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import s from '@/styles/services.module.css'
export default function Services() {
    return (
        <>
            <Head>
                <title>Srvices @IRA</title>
            </Head>

            <main id={s.services}>
                <div id={s.servicesHead} data-aos="fade-up">
                    <div id={s.topHead}> OUR SERVICES</div>
                    <span>Check out our best services</span>
                </div>
                <div id={s.serviceCards}>
                    <div className={s.serviceCard} data-aos="fade-up" data-aos-delay="100">
                        <div className={s.serviceCardLeft}>
                            <div className={s.servTop}>
                                <div className={s.serviceCardHeading}>IT Consulting</div>
                                <span>We offer IT Consulting services that  help you improve your software architecture.
                                    Create
                                    a
                                    software driven strategy, improve opertations</span>
                            </div>
                            <Link href='/contact'>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div></Link>
                        </div>
                        <div className={s.serviceCardRight}>
                            <Image src="https://unsplash.com/photos/wzVQp_NRIHg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fGNvbXB1dGVyfGVufDB8fHx8MTY2NjgyOTQ3Mw&force=true" alt="services" width="210" height="600" />
                        </div>
                    </div>
                    <div className={s.serviceCard} data-aos="fade-up" data-aos-delay="200">
                        <div className={s.serviceCardLeft}>
                            <div className={s.servTop}>
                                <div className={s.serviceCardHeading}>Temporary Staffing</div>
                                <span>
                                    Candidates can work with clients , and after completion get back to us for more work.
                                </span>
                            </div>
                            <Link href='/contact'>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div></Link>
                        </div>
                        <div className={s.serviceCardRight}>
                            <Image src="https://unsplash.com/photos/MYbhN8KaaEc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDE1&force=true&w=2400" alt="services" width="400" height="300" />
                        </div>
                    </div>
                    <div className={s.serviceCard} data-aos="fade-up">
                        <div className={s.serviceCardLeft}>
                            <div className={s.servTop}>
                                <div className={s.serviceCardHeading}>Permanent Staffing</div>
                                <span>We will provide candidates based on client requirements</span>
                            </div>
                            <Link href='/contact'>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div></Link>
                        </div>
                        <div className={s.serviceCardRight}>
                            <Image src="https://unsplash.com/photos/Y5bvRlcCx8k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDk5&force=true" alt="services" width="210" height="300" />
                        </div>
                    </div>
                    <div className={s.serviceCard} data-aos="fade-up" data-aos-delay="200">
                        <div className={s.serviceCardLeft}>
                            <div className={s.servTop}>
                                <div className={s.serviceCardHeading}>Application Developement</div>
                                <span>We will make application based on your company requirements,that suite your needs</span>
                            </div>
                            <Link href='/contact'>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div></Link>
                        </div>
                        <div className={s.serviceCardRight}>
                            <Image src="https://unsplash.com/photos/bMTl6uFMONg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fHx8MTY4MDYwOTA3NA&force=true" alt="" width="200" height="300" />
                        </div>
                    </div>

                </div>
            </main>
            <Navbar />

            <Footer />



        </>
    )
}