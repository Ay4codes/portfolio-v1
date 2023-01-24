import SectionTitle from "../Global-components/SectionTitle"
import Project from "../Global-components/Portfolio-item"
import SectionBtn from "../Global-components/SectionBtn"
import Link from "next/link"
import Image from "next/image"

export default function Home3rdSection() {
    return (
        <div className="home-3rd-section-wrapper pb-14">
            <SectionTitle title={'My Portfolio'} />
            <div className="home-3rd-section-content-wrapper">
                <div className="port-sec-wrap w-full rounded-3xl">
                    <div className="port-grid-wrapper">
                        <Project img={'/bethillszone.png'} category={'Web Dev.'} txt={'Bethillszone presents free mathematical football predictions free analysis, football form and statistics, the latest results and league tables more than 400 football leagues.'} project_name={'Bethillszone - Free Mathematical Prediction'} url={'https://bethillszone.com/'} alt={'Bethillszone preview image'} />
                        <Project img={'/feedbackup.png'} category={'Web Dev.'} txt={'FeedBackUp is a products and services review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies and individuals to level up their game.'} project_name={'Feedbackup'} url={'https://feedbackup.vercel.app/'} alt={'Feedbackup preview image'} />
                    </div>
                </div>
            </div>
            <SectionBtn width={'180px'} linkTo={'/portfolio'} title={'View Portfolio'} />
            <div className="socials-wrapper">
                <p>Follow me and check my portfolio to discover more great works.</p>
                <div className="main-social-wrapper gap-5 mt-5">
                    <Link target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/ayomide-ishola-b1240124a'}><Image width={40} height={40} src="/linkedin.png" /></Link>
                    <Link target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/haryormeed_256/'}><Image width={40} height={40} className={'rounded-xl'} src="/instagram.svg" /></Link>
                    <Link target="_blank" rel="noopener noreferrer" href={'https://www.twitter.com/ay4codes'}><Image width={40} height={40} className={'rounded-xl'} src="/twitter.png" /></Link>
                    <Link target="_blank" rel="noopener noreferrer" href={'https://www.github.com/ay4codes'}><Image width={40} height={40} className={'rounded-xl'} src="/github.png" /></Link>
                </div>
            </div>
        </div>
    )
}