import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function NavBar() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" className="nav-bar-main w-full pt-8" >
            <div className="nav-innner flex items-center justify-between">
                <div className="logo-wrapper">
                    <img width={60} height={60} src="/logo.png" alt="Ay4codes Logo" />
                </div>
                <div className="flex items-center gap-32">
                    <ul className="navigator-lists list-none flex gap-9">
                        <li><span>Home</span></li>
                        <li><span>About</span></li>
                        <li><span>Portfolio</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                    <div className="lets-chat-btn">
                        <button className="flex items-center gap-2 rounded-full  py-2 px-5 cursor-pointer">Let's chat <img width={20} src="/chat.png" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

