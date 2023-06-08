import s from '@/styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <>
            <footer>
                <div id={s.footerLeft}>
                    {/* logo here */}
                    <Image src='/assets/logob.svg' height={80} width={60}  alt="Ira FS logo"/>
                    <div id={s.head}>
                        IRA FS
                    </div>
                    <div id={s.country}>
                        USA & India
                    </div>
                </div>
                <div id={s.footerRight}>
                    <div id={s.top}>
                        IRA FS &copy;
                    </div>
                    <div id={s.bottom}>
                        <div className={s.footLink}>
                            <Link href='tel:+91 73861 49433'>
                                Call Us.
                            </Link>
                        </div>
                        <div className={s.footLink}>
                            <Link href='mailto:contact@irafs.com'>
                                contact@irafs.com
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}