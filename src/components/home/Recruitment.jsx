import styles from '@/styles/Home/Recruitment.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Recruitment() {

    return (
        <>
            <section id={styles.recruitProcess}>
                <div id={styles.recruitHead} data-aos="fade-right"  >
                    RECRUITMENT PROCEDURE <br />
                    <span>This 6 step algorithm explains it </span>
                </div>
                <div id={styles.recruitArea}>
                    <div id={styles.recruitCards}>
                        {/* first */}
                        <div className={styles.recruitCard} data-aos="flip-right">
                            <div className={styles.recruitCardNumber}>01.</div>

                            <div className={styles.recruitDivider}>
                                <div className={styles.recruitCardProcess}>
                                    <div className={styles.recruitCardHead}>Preparing</div>
                                    <div className={styles.recruitCardSubhead}>Understanding the Job well</div>
                                </div>
                                <Image src="/assets/recruit/prepare.png" width='50' height='50' alt='warriors group' />
                            </div>
                        </div>
                        {/* second  */}
                        <div className={styles.recruitCard} data-aos="flip-right">
                            <div className={styles.recruitCardNumber}>02.</div>

                            <div className={styles.recruitDivider}>
                                <div className={styles.recruitCardProcess}>
                                    <div className={styles.recruitCardHead}>Sourcing</div>
                                    <div className={styles.recruitCardSubhead}>Matching the candidates with required jobs</div>
                                </div>
                                <Image src="/assets/recruit/match.png" width='50' height='50' alt='matching' />
                            </div>
                        </div>
                        {/* third */}
                        <div className={styles.recruitCard} data-aos="flip-right">
                            <div className={styles.recruitCardNumber}>03.</div>

                            <div className={styles.recruitDivider}>
                                <div className={styles.recruitCardProcess}>
                                    <div className={styles.recruitCardHead}>Screening</div>
                                    <div className={styles.recruitCardSubhead}>Filtering applicants and shortlisting</div>
                                </div>
                                <Image src="/assets/recruit/screen.png" width='50' height='50' alt='screening' />
                            </div>
                        </div>
                        {/* fourth */}
                        <div className={styles.recruitCard} data-aos="flip-right">
                            <div className={styles.recruitCardNumber}>04.</div>

                            <div className={styles.recruitDivider}>
                                <div className={styles.recruitCardProcess}>
                                    <div className={styles.recruitCardHead}>Selecting</div>
                                    <div className={styles.recruitCardSubhead}>Interviewing candidates and finalizing</div>
                                </div>
                                <Image src="/assets/recruit/select.png" width='50' height='50' alt='selection' />
                            </div>
                        </div>
                        {/* fifth */}
                        <div className={styles.recruitCard} data-aos="flip-right">
                            <div className={styles.recruitCardNumber}>05.</div>

                            <div className={styles.recruitDivider}>
                                <div className={styles.recruitCardProcess}>
                                    <div className={styles.recruitCardHead}>Hiring</div>
                                    <div className={styles.recruitCardSubhead}>Job offering to the candidate</div>
                                </div>
                                <Image src="/assets/recruit/hire.png" width='50' height='50' alt='hiring' />
                            </div>
                        </div>
                        {/* sixth */}
                        <div className={styles.recruitCard} data-aos="flip-right">
                            <div className={styles.recruitCardNumber}>06.</div>

                            <div className={styles.recruitDivider}>
                                <div className={styles.recruitCardProcess}>
                                    <div className={styles.recruitCardHead}>Onboarding</div>
                                    <div className={styles.recruitCardSubhead}>The final step </div>
                                </div>
                                <Image src="/assets/recruit/onboard.png" width='50' height='50' alt='onboarding' />
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}