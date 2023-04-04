import s from '@/styles/Home/Header.module.css'
import Image from 'next/image'


export default function Header() {

    return (
        <>
            <div id={s.Header}>
                <div id={s.HeaderLeft} data-aos="fade-up">
                    <div>
                        The Best <span>Staffing</span> and <span>hiring</span> solutions rightaway!
                    </div>
                    <div id={s.cta}>
                        Explore More
                    </div>
                </div>
                <div id={s.HeaderRight} data-aos="fade-up" data-aos-delay="200">
                    <Image id={s.images} alt="random" src='/assets/images/front.jpg' height={400} width={300} />
                </div>
            </div>

        </>
    )
}