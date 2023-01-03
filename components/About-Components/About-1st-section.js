import Link from "next/link"
import SectionTitle from "../Global-components/SectionTitle"

export default function About1stSection() {
    return (
        <div className="about-head-wrapper">
            <div className="about-head-inner">
                <div className="about-head-inner-content about-head-inner-content1">
                    <div className="main-about-head-inner-content">
                        <SectionTitle title={'About Me'} />
                        <p>Creative and Experienced Full Stack Web Developer, Providing high-impact web solutions for diverse industry organizations. Skilled in developing, analyzing and testing multiple web-based applications incorporating a range of technologies. Fast learner & opened to learn more from my senior Developers. Aspiring to combine broad background with strong technical skills to excel as a Full Stack Web Developer.</p>
                        <Link href={'/contact'}>
                            <button>Contact Me</button>
                        </Link>
                    </div>
                </div>
                <div className="about-head-inner-content about-head-inner-content2">
                    <img src="/about.png" />
                </div>
            </div>
        </div>
    )
}