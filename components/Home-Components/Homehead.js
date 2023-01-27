import Link from "next/link"
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Homehead() {
    return (
        <div className="home-head-wrapper">
            <div className="home-head-inner">
                <div className="home-head-inner-content">
                    <div>
                        <div className="intro-container">
                            <div className={'new_container'}>
                                <div className={'new_small'}>New</div>
                                <div className={'new_small_nd'}>Ay4codes {'🌟🚀'}</div>
                            </div>
                            <h3 className="animate__swing">Hello! World</h3>
                            <h1>I’m Ayomide Ishola</h1>
                            <p><span><Icon icon="ic:round-less-than" /></span>Developer<span><Icon icon="ic:round-greater-than" /></span></p>
                        </div>
                        <div className="intro-msg-p">
                            <p>Am a Full Stack Developer, Specialised in frontend and backend development for complex scalable web apps. Over the years I've successfully developed custom solutions to solve challenges and engineered designs to meet predetermined functionality goals.</p>
                        </div>
                        <div className="home-head-btm-btns-wrapper">
                            <Link href={'/contact'}>
                                <div className="contact-me-btn">Contact Me</div>
                            </Link>
                            <Link target="_blank" rel="noopener noreferrer" href={'https://drive.google.com/file/d/1tWhvGxa2-0gXvGwOsv5PVLygto3M2zlm/view?usp=sharing'}>
                                <div className="browse-cv-btn">Browse CV</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-head-inner-content">
                    <img src="/profile.png" alt="Portfolio Profile"/>
                </div>
            </div>
            <div className="home-head-btm-container">
                <Image width={150} height={120} src="/btm-pink.png" alt="btm-pink-icon" />
                <div className={'typewriter_container'}>
                    <p className="">{"I’m"}</p>
                    <Typewriter
                        options={{
                        strings: ['a Full Stack Developer'],
                        autoStart: true,
                        loop: true,}}
                    />
                </div>
                <Image width={150} height={120} src="/btm-blue.png" alt="btm-blu-icon" />
            </div>
        </div>
    )
}