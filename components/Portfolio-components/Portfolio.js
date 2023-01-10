import Link from "next/link"
import SectionTitle from "../Global-components/SectionTitle"
import Project from "../Global-components/Portfolio-item"

export default function Portfolio() {
    return (
        <div className="portfolio-head-wrapper">
            <SectionTitle title={'My Portfolio'} />
            <div className="portfolio-head-inner-wrapper">
                <Project img={'/portfolio.png'} category={'Web Dev.'} txt={'This is my person portfolio website (v1). Built with Next Js.'} project_name={'Ayomide Ishola Portfolio Website - (v1)'} url={'https://ay4codes.com/'} alt={'My Portfolio preview image'} />
                <Project img={'/bethillszone.png'} category={'Web Dev.'} txt={'Bethillszone presents free mathematical football predictions free analysis, football form and statistics, the latest results and league tables more than 400 football leagues.'} project_name={'Bethillszone - Free Mathematical Prediction'} url={'https://bethillszone.com/'} alt={'Bethillszone preview image'} />
                <Project img={'/feedbackup.png'} category={'Web Dev.'} txt={'FeedBackUp is a products and services review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies and individuals to level up their game.'} project_name={'Feedbackup'} url={'https://feedbackup.netlify.app/'} alt={'Feedbackup preview image'} />
                <Project img={'/payme.png'} category={'Web Dev.'} txt={'Payme is a web app that helps in keeping record of transactions with automatic sms reminder every morning to not loose track of your money.'} project_name={'Payme'} url={'https://pay-me.onrender.com/'} alt={'Payme preview image'} />
                <Project img={'/labongoes.png'} category={'Web Dev.'} txt={'A shopping cart system that sends customer order to the receptionist email. Built with React Js.'} project_name={'A shopping cart system'} url={'https://labongoes.netlify.app/'} alt={'Shopping cart system preview image'} />
                <Project img={'/dryjokes.png'} category={'Web Dev.'} txt={'A simple web app that gives a random “dry” joke using third-party API services.'} project_name={'Dry Jokes'} url={'https://ay4codes.github.io/DryJokes/'} alt={'Dry Jokes preview image'} />
            </div>
        </div>
    )
}