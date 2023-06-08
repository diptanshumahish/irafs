import s from '@/styles/Home/WhoAreWe.module.css'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
export default function WhoAreWe() {
    return (
        <>
            <div id={s.Who}>
                <div id={s.top}>
                    <div id={s.WhoLeft}>
                        <div className={s.headings}>
                            <div id={s.HeadingTop}>
                                Who Are We?
                            </div>
                            <div id={s.knmore}>
                                Know more about us
                            </div>
                        </div>
                    </div>
                    <div id={s.WhoRight}>
                        <span>IRA FS</span> provides quality IT talent with outstanding <span>customer satisfaction</span> along with innovative resource planning and staffing solutions.
                        <br />

                        In this competitive era of digital,
                        Information Technology talents need to perform under consistent
                        stress with <span>strict delivery timelines</span>. We play a vital role to evaluate
                        <span> best fit</span> talent for our valued customers. We also strive for consistent performance,
                        hinging on evaluation of customer&apos;s strategic plan and has the experience to carry it out.
                        <br />
                        <br />
                        <span>Below are some clients we have worked with ✨</span>
                    </div>
                </div>
                <div id={s.bottom}>
                    <Marquee gradientWidth={0} speed='60'>
                        <Image src='/assets/company/tcs.png' height={100} width={400} className={s.clientLogo} alt='tcs' />&nbsp;
                        <Image src='/assets/company/per.png' height={100} width={400} className={s.clientLogo} alt='persistence' /> &nbsp; &nbsp;
                        <Image src='/assets/company/hcl.png' height={100} width={400} className={s.clientLogo} alt='hcl' />&nbsp; &nbsp;
                        <Image src='/assets/company/randstad.jpg' height={100} width={400} className={s.clientLogo} alt='randstand' />  &nbsp;&nbsp;
                        <Image src='/assets/company/gen.png' height={100} width={400} className={s.clientLogo} alt='genimpact' />&nbsp; &nbsp; &nbsp;
                        <Image src='/assets/company/cap.webp' height={100} width={400} className={s.clientLogo} alt='capegmini' />&nbsp; &nbsp;
                        <Image src='/assets/company/info.png' height={100} width={400} className={s.clientLogo} alt='infosys' />&nbsp; &nbsp;
                        <Image src='/assets/company/kforce.png' height={100} width={400} className={s.clientLogo} alt='kforce' />  &nbsp;&nbsp; &nbsp;
                        <Image src='/assets/company/ver.png' height={100} width={400} className={s.clientLogo} alt='vercel' />  &nbsp;&nbsp;
                        <Image src='/assets/company/walmart.png' height={100} width={400} className={s.clientLogo} alt='walmart' />  &nbsp;&nbsp;
                        <Image src='/assets/company/wipro.png' height={100} width={400} className={s.clientLogo} alt='wipro' />  &nbsp;&nbsp;
                        <Image src='/assets/company/capi.png' height={100} width={400} className={s.clientLogo} alt='capital' />  &nbsp;&nbsp;
                        <Image src='/assets/company/quad.png' height={100} width={400} className={s.clientLogo} alt='quad' />  &nbsp;&nbsp;
                        <Image src='/assets/company/hun.png' height={100} width={400} className={s.clientLogo} alt='hunter' />  &nbsp;&nbsp;
                        <Image src='/assets/company/cof.png' height={100} width={400} className={s.clientLogo} alt='cof' />  &nbsp;&nbsp;


                    </Marquee>

                </div>
            </div>
            <div id={s.exp}>
                <div id={s.expHead} data-aos="fade-right">
                    OUR
                    EXPERTISE
                </div>
                <div>
                    <ul id={s.list} >
                        <li data-aos="fade-left">
                            Client Centric
                        </li>
                        <li data-aos-delay="100" data-aos="fade-left">Cost Effective</li>
                        <li data-aos-delay="200" data-aos="fade-left">Best in class</li>
                    </ul>
                </div>

            </div>
            <div id={s.what}>
                <div className={s.whatCard} data-aos="fade-up">
                    <Image src='/assets/four/permanent.png' width={80} height={80} alt='permanent staffing @wg'></Image>
                    <div className={s.whatHeading}>Permanent Staffing</div>
                    <div className={s.whatContent}>
                        Permanent hiring solutions are quite crucial, with our organization you can rely easily for that
                    </div>
                </div>
                <div className={s.whatCard} data-aos="fade-up" data-aos-delay="100">
                    <Image src='/assets/four/tehcnical.png' width={80} height={80} alt='Technical staff @wg'></Image>
                    <div className={s.whatHeading}>Technical Staff</div>
                    <div className={s.whatContent}>Our tehcnical solutions are the best in class, you can easily rely on them </div>
                </div>
                <div className={s.whatCard} data-aos="fade-up" data-aos-delay="200">
                    <Image src='/assets/four/tempstaff.png' width={80} height={80} alt='Tempoarary staffing @wg '></Image>
                    <div className={s.whatHeading}>Temporary Staffing</div>
                    <div className={s.whatContent}>Most people are in need for temporary staffing. Do not worry we got you covered for the same.</div>
                </div>
                <div className={s.whatCard} data-aos="fade-up" data-aos-delay="300">
                    <Image src='/assets/four/hire.png' width={80} height={80} alt='contract hiring @wg'></Image>
                    <div className={s.whatHeading}>Contract Hiring</div>
                    <div className={s.whatContent}>More suitable for most organizations. Here consider this service sorted for you</div>
                </div>
                <div className={s.whatCard} data-aos="fade-up">
                    <Image src='/assets/four/cld.png' width={80} height={80} alt='permanent staffing @wg'></Image>
                    <div className={s.whatHeading}>Cloud Engafement</div>
                    <div className={s.whatContent}>
                    To help your business handle growth, you can trust in a cloud service platform that provides database storage, security, content delivery and computing power.
                    </div>
                </div>
                <div className={s.whatCard} data-aos="fade-up" data-aos-delay="100">
                    <Image src='/assets/four/c.png' width={80} height={80} alt='Technical staff @wg'></Image>
                    <div className={s.whatHeading}>IT Consulting</div>
                    <div className={s.whatContent}>Depend on professional IT services to veer you in the right direction. We advise you on how to use and improve information technology considering your business objectives. </div>
                </div>
                <div className={s.whatCard} data-aos="fade-up" data-aos-delay="200">
                    <Image src='/assets/four/data.png' width={80} height={80} alt='Tempoarary staffing @wg '></Image>
                    <div className={s.whatHeading}>Data Science</div>
                    <div className={s.whatContent}>Data is not always easy to interpret. Your business can profit substantially by attaining information and insights from your data with ease of organization and accessibility.</div>
                </div>
                <div className={s.whatCard} data-aos="fade-up" data-aos-delay="300">
                    <Image src='/assets/four/biz.png' width={80} height={80} alt='contract hiring @wg'></Image>
                    <div className={s.whatHeading}>Business Intelligence</div>
                    <div className={s.whatContent}>Business intelligence involves leveraging several applications and methods with data collection, advanced analysis and query checks to create accurate reports and dashboards. </div>
                </div>

            </div>
        </>
    )
}