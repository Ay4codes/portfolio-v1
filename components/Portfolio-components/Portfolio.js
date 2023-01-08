import Link from "next/link"
import SectionTitle from "../Global-components/SectionTitle"
import Project from "../Global-components/Portfolio-item"

export default function Portfolio() {
    return (
        <div className="portfolio-head-wrapper">
            <SectionTitle title={'My Portfolio'} />
            <div className="portfolio-head-inner-wrapper">
                <Project img={'/bethillszone.png'} category={'Web Dev.'} txt={'Bethillszone presents free mathematical football predictions free analysis, football form and statistics, the latest results and league tables more than 400 football leagues.'} project_name={'Bethillszone - Free Mathematical Prediction'} url={'https://bethillszone.com/'} />
                <Project img={'/bethillszone.png'} category={'Web Dev.'} txt={'Bethillszone presents free mathematical football predictions free analysis, football form and statistics, the latest results and league tables more than 400 football leagues.'} project_name={'Bethillszone - Free Mathematical Prediction'} url={'https://bethillszone.com/'} />
                
            </div>
        </div>
    )
}