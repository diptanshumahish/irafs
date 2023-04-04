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
                        MAJOR TECHNOLOGIES
                    </div>

                </div>
                <div id={s.bottom}>
                    <div id={s.techCardsHome}>
                        <Link href='/tech'>
                            <div className={s.techCardHome} data-aos="fade-right"><div className={s.techCardHomeText}>Java FullStack</div>  <Image src='/assets/tech/java.svg' height='30' width='30' alt='java' /></div>
                        </Link>
                        <Link href='/tech'>
                            <div className={s.techCardHome} data-aos="fade-left" id={s.py}><div className={s.techCardHomeText} >Python</div>  <Image src='/assets/tech/python.svg' height='30' width='30' alt='pytthon' /></div>
                        </Link>
                        <Link href='/tech'>
                            <div className={s.techCardHome} data-aos="fade-right" id={s.data}><div className={s.techCardHomeText}>Data Scientist</div>  <Image src='/assets/tech/java.svg' height='30' width='30' alt='ds' /></div>
                        </Link>
                        <Link href='/tech'>
                            <div className={s.techCardHome} data-aos="fade-left" id={s.net}><div className={s.techCardHomeText}>.NET developer</div>  <Image src='/assets/tech/net.svg' height='30' width='30' alt='.net' /></div>
                        </Link>
                        <Link href='/tech'>
                            <div className={s.techCardHome} data-aos="fade-right" id={s.devOps}><div className={s.techCardHomeText}>DevOps</div>  <Image src='/assets/tech/devops.svg' height='30' width='30' alt='devops' /></div>
                        </Link>
                        <Link href='/tech'>
                            <div className={s.techCardHome} id={s.last} data-aos="fade-up" ><div className={s.techCardHomeText}>Check out all Technologies&apos; candidates we have 🠮</div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}