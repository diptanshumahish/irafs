import Head from "next/head"
import Navbar from "@/components/NavBar"
import c from '@/styles/contactus.module.css'
import Footer from "@/components/Footer"
import Image from "next/image"
export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Navbar />
            <main>
                <div id={c.ctu}>
                    <div id={c.head} data-aos="fade-up">
                        <div id={c.headMain}>LET&apos;S CONNECT</div>
                        <div id={c.sub}>Fill up the form and we will get back to you ASAP</div>
                    </div>
                    <div id={c.form} >
                        <div id={c.formLeft} data-aos="fade-up">

                            <form action="https://formsubmit.co/contact@irafs.com" id={c.contactForm} method="POST">
                                <label htmlFor="Name" >
                                    <div className={c.forEle} >
                                        Name
                                    </div>
                                    <input type="text" placeholder="Enter your name" name="name" />
                                </label>
                                <label htmlFor="Email" >
                                    <div className={c.forEle}>
                                        Email
                                    </div>
                                    <input type="email" placeholder="Enter your Email" name="email" />
                                </label>
                                <label htmlFor="mobileNumber">
                                    <div className={c.forEle}>
                                        Mobile Number
                                    </div>
                                    <input type="tel" placeholder="Enter your Mobile Number" name="mobile Number" />
                                </label>
                                <label htmlFor="message">
                                    <div className={c.forEle}>
                                        Message
                                    </div>
                                    <textarea name="message" id="" cols="20" rows="10" placeholder="Enter your Message here" ></textarea>
                                </label>
                                <input type="hidden" name="_next" value="https://irafs.com/thankYou"></input>
                                <input type="hidden" name="_template" value="box"></input>
                                <input type="hidden" name="_captcha" value="false"></input>
                                <input type="hidden" name="_subject" value="New submission!"></input>
                                <button type="submit" id={c.submit}>Submit</button>
                            </form>
                        </div>
                        <div id={c.formRight} data-aos="fade-up" data-aos-delay="100">
                            <Image src='/assets/images/form.svg' height={500} width={500} alt="random" id={c.img} />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />


        </>
    )
}