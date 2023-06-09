import s from '@/styles/Home/MajorTech.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function MajorTech() {
    return (
        <>
            <div id={s.mjtech} >
                <div id={s.top}>
                    <div id={s.mjDet}>
                        <ul id={s.list} data-aos="fade-right">
                            <li>
                                Modern
                            </li>
                            <li>Efficient</li>
                            <li>Indistry standards</li>
                        </ul>
                    </div>
                    <div id={s.mjHead} data-aos="fade-left">
                        OUR SERVICES
                    </div>

                </div>
                <div id={s.bottom}>
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
                                <Link href='/contactus'>
                                    <div className={s.servBottom}>
                                        Get the service!
                                    </div></Link>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="https://unsplash.com/photos/hhUx08PuYpc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgwNzU0MzYw&force=true&w=1920" alt="services" width="210" height="600" />
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
                                <Link href='/contactus'>
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
                                <Link href='/contactus'>
                                    <div className={s.servBottom}>
                                        Get the service!
                                    </div></Link>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="https://unsplash.com/photos/Lks7vei-eAg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fHN0YWZmfGVufDB8fHx8MTY4MDY5NTcyOQ&force=true&w=2400" alt="services" width="210" height="300" />
                            </div>
                        </div>
                        <div className={s.serviceCard} data-aos="fade-up" data-aos-delay="200">
                            <div className={s.serviceCardLeft}>
                                <div className={s.servTop}>
                                    <div className={s.serviceCardHeading}>Application Developement</div>
                                    <span>We will make application based on your company requirements,that suite your needs</span>
                                </div>
                                <Link href='/contactus'>
                                    <div className={s.servBottom}>
                                        Get the service!
                                    </div></Link>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="https://unsplash.com/photos/bMTl6uFMONg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fHx8MTY4MDYwOTA3NA&force=true" alt="" width="200" height="300" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}