import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function NavBar() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" className="nav-bar-main" >
            <div className="nav-innner">
                <div className="logo-wrapper">
                    <img width={60} height={60} src="/logo.png" alt="Ay4codes Logo" />
                </div>
                <div className="navigator-lists-wrapper">
                    <ul className="navigator-list">
                        <li><span>Home</span></li>
                        <li><span>About</span></li>
                        <li><span>Portfolio</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                    <div className="lets-chat-btn">
                        <button>Let's chat <img width={20} src="/chat.png" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

