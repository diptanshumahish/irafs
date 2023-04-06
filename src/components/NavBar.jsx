import Link from "next/link"
import Image from "next/image";
import { useState } from "react"
export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
            <nav>
                <div id="navLogo" >
                    <div>
                        <Image src='/irafs.svg' height={60} width={50} />
                    </div>
                    <div id="navLogoText">
                        <div id="Logo1">IRA</div>
                        <div id="Logo2">Future Solutions.</div>
                    </div>
                </div>
                <div id="navLinks">
                    <Link href='/'>
                        Home
                    </Link>

                    <Link href='/technologies'>
                        Technologies
                    </Link>
                    <Link href='/aboutus'>
                        About Us
                    </Link>
                    <Link href='/contactus' id="cts">
                        Contact Us
                    </Link>
                </div>
                <div id="mob" onClick={() => {
                    setOpenNav(true);


                }}>
                    <img src="/assets/images/menu.svg" alt="menu icon" height={30} width={30} />
                </div>

            </nav>
            {
                openNav === true && (
                    <div id="mobileNav">
                        <div id="close" onClick={() => {
                            setOpenNav(false);
                        }}>CLOSE</div>
                        <ul id="menuItems" onClick={() => {
                            setOpenNav(false);
                        }}>
                            <Link href='/' >
                                <li>Home</li>
                            </Link>
                            <Link href='/technologies' >
                                <li>Technologies</li>
                            </Link>
                            <Link href='/aboutus' >
                                <li>About Us</li>
                            </Link>
                            <Link href='/contactus' id="ctb" >
                                <li>Contact Us</li>
                            </Link>

                        </ul>
                    </div>
                )
            }
        </>
    )
}