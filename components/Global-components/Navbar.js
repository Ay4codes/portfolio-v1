import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import Link from "next/link";


export default function NavBar() {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div className="nav-bar-main" >
                <div className="nav-innner">
                    <div className="logo-wrapper">
                        <img width={60} height={60} src="/logo.png" alt="Ay4codes Logo" />
                    </div>
                    <div className="navigator-lists-wrapper">
                        <ul className="navigator-list">
                            <li><Link href={'/'}><span>Home</span></Link></li>
                            <li><Link href={'/about'}><span>About</span></Link></li>
                            <li><Link href={'/portfolio'}><span>Portfolio</span></Link></li>
                            <li><Link href={'/contact'}><span>Contact</span></Link></li>
                        </ul>
                        <div className="lets-chat-btn">
                            <Link href={'/contact'}><button>Let's chat <img width={20} src="/chat.png" /></button></Link>
                            <div onClick={() => {setIsActive(true)}} className='hamburger-wrapper'><Icon icon="charm:menu-hamburger" width={20} color="#ff8c92" /></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {isActive && <div className="drop-nav-overlay"></div>}
            <div className="drop-nav-inner-wrapper">
                <div style={{transform: isActive  ? 'translateY(0%)' : 'translateY(-130%)'}} className="drop-nav-inner">
                    <button className="drop-cancel-btn">
                        <Icon onClick={() => {setIsActive(false)}} width={50} height={50} style={{cursor:'pointer'}} color='#ff8c92' icon="material-symbols:cancel" />
                    </button>
                    <Link href={''}>
                        <button>Home</button>
                    </Link> <br />
                    <Link href={''}>
                        <button>About</button>
                    </Link> <br />
                    <Link href={''}>
                        <button>Portfolio</button>
                    </Link> <br />
                    <Link href={''}>
                        <button>Contact</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

