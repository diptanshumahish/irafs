import s from '@/styles/Home/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {

    return (
        <>
            <div id={s.Header}>
                <div id={s.HeaderLeft} data-aos="fade-up">
                    <div>
                        The Best <span>Staffing</span> and <span>hiring</span> solutions rightaway!
                    </div>
                    <Link href='/contactus'>
                        <div id={s.cta}>
                            Explore More
                        </div>
                    </Link>
                </div>
                <div id={s.HeaderRight} data-aos="fade-up" data-aos-delay="200">
                   
                    {/* <video src="/ir.mp4" height={400} width={300} autoPlay loop muted></video> */}
                    {/* <iframe src="https://embed.lottiefiles.com/animation/144574"></iframe> */}
                </div>
            </div>

        </>
    )
}