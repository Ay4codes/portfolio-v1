import Link from "next/link"
import Typewriter from 'typewriter-effect';


export default function Homehead() {
    return (
        <div className="home-head-wrapper pt-[100px]">
            <div className="home-head-inner justify-between items-center mb-8">
                <div className="home-head-inner-content">
                    <div>
                        <div className="intro-container">
                            <h3>Hello! World</h3>
                            <h1>I’m Ayomide Ishola</h1>
                            <p><span>{'<'}</span>Developer<span>{'>'}</span></p>
                        </div>
                        <div className="intro-msg-p">
                            <p>Am a Full Stack Developer based in Lagos, Nigeria. Specialised in frontend and backend development for complex scalable web apps. Over the years I've successfully developed custom solutions to solve challenges and engineered designs to meet predetermined functionality goals.</p>
                        </div>
                        <div className="flex items-center gap-8 mt-10">
                            <Link href={'/contact'}>
                                <div className="contact-me-btn rounded-full py-7 px-20">Contact Me</div>
                            </Link>
                            <Link href={'https://drive.google.com/file/d/1tWhvGxa2-0gXvGwOsv5PVLygto3M2zlm/view?usp=share_link'}>
                                <div className="browse-cv-btn rounded-full py-7 px-20">Browse CV</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-head-inner-content">
                    <img src="/profile.png" alt="Portfolio Profile"/>
                </div>
            </div>
            <div className="home-head-btm-container flex items-center justify-between w-full">
                <img className="ml-[-180px] mt-[-40px]" src="/btm-pink.png" alt="btm-pink-icon" />
                <div className={'typewriter_container'}>
                    <p className=" flex items-center gap-3">I’m 
                        <span>
                            <Typewriter
                                options={{
                                strings: ['a Full Stack Developer', 'a Data Analyst'],
                                autoStart: true,
                                loop: true,}}
                            />
                        </span>
                    </p>
                    
                </div>
                <img className="mr-[-180px] mt-[-40px]" src="/btm-blue.png" alt="btm-blu-icon" />
            </div>
        </div>
    )
}