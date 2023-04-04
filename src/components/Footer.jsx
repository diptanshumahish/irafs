import s from '@/styles/Footer.module.css';
import Link from 'next/link';
export default function Footer() {
    return (
        <>
            <footer>
                <div id={s.footerLeft}>
                    {/* logo here */}
                    <div id={s.head}>
                        IRA
                    </div>
                    <div id={s.subHead}>
                        Future Solutions.
                    </div>
                    <div id={s.country}>
                        India
                    </div>
                </div>
                <div id={s.footerRight}>
                    <div id={s.top}>
                        IRA Future Solutions &copy;
                    </div>
                    <div id={s.bottom}>
                        <div className={s.footLink}>
                            <Link href='tel:+91 73861 49433'>
                                +91 73861 49433
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