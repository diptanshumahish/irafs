import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function ThankYou() {

    return (
        <>
            <Head>
                <title>Thank You!</title>
            </Head>
            <main>
                <div id="thankYou">
                    <div>
                        <Image src='/assets/logob.svg' height={100} width={100} />
                    </div>
                    <div id="thanksText">
                        Thank You for submitting the form
                    </div>
                    <div id="thanksButton">
                        <Link href='/'>
                            Back To main site
                        </Link>
                    </div>
                </div>
            </main>

        </>
    )
}