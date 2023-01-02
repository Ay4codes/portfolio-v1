import SectionTitle from "../Global-components/SectionTitle"


export default function About1stSection() {
    return (
        <div className="about-head-wrapper">
            <div className="about-head-inner">
                <div className="about-head-inner-content about-head-inner-content1">
                    <div className="main-about-head-inner-content">
                        <SectionTitle title={'About Me'} />
                    </div>
                </div>
                <div className="about-head-inner-content about-head-inner-content2">
                    <img src="/about.png" />
                </div>
            </div>
        </div>
    )
}