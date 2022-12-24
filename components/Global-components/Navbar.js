

export default function NavBar() {
    return (
        <div className="nav-bar-main w-full pt-12" >
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
                        <button className="flex items-center gap-2 rounded-full  py-3 px-11 cursor-pointer">Let's chat <img width={20} src="/chat.png" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

