import Link from "next/link"
import SectionBtn from "../Global-components/SectionBtn"

export default function Home4thSection() {
    return (
        <div className="home-4th-section-wrapper">
            <div className="home-4th-section-inner">
                <div className="section-title-btn-icon section-title-btn-icon2 rounded-full"></div>
                <h2>Let's skyrocket your <br /> next project together.</h2>
                <Link href={'/contact'}>
                    <button>Contact me</button>
                </Link>
            </div>
            <div className="home-4th-section-inner home-4th-section-inner2">
                <img src="/rounded.png" />
            </div>
        </div>
    )
} 