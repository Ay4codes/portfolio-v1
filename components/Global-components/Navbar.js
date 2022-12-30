import { useEffect } from "react";
import { Icon } from '@iconify/react';


export default function NavBar() {
    return (
        <div className="nav-bar-main" >
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
                        <div className='hamburger-wrapper'><Icon icon="charm:menu-hamburger" width={20} color="#ff8c92" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

