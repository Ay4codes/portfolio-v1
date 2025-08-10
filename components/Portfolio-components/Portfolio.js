import Link from "next/link"
import SectionTitle from "../Global-components/SectionTitle"
import Project from "../Global-components/Portfolio-item"

export default function Portfolio() {
    return (
        <div className="portfolio-head-wrapper">
            <SectionTitle title={'My Portfolio'} />
            <div className="portfolio-head-inner-wrapper">
                <Project
                    img={'/bethillszone.jpeg'}
                    category={'Web Dev.'}
                    txt={'Bethillszone presents free mathematical football predictions free analysis, football form and statistics, the latest results and league tables more than 400 football leagues.'}
                    project_name={'Bethillszone - Free Mathematical Prediction'}
                    url={'https://bethillszone.com/'}
                    alt={'Bethillszone preview image'}
                />
                <Project
                    img={'/octacode.png'}
                    category={'Web Dev.'}
                    txt={'Octacode is a web development agency website Transforming Businesses with Cutting-Edge Digital Innovation'}
                    project_name={'Octacode'}
                    url={'https://new-octacode.netlify.app/'}
                    alt={'Octacode'}
                />
                <Project
                    img={'/wocincrypto.png'}
                    category={'Web Dev.'}
                    txt={'Women of Color in Crypto is a dedicated platform empowering women of color to master crypto and Web3 through tailored, accessible education. Engage with a supportive community and build confidence as you navigate the decentralized future.'}
                    project_name={'Woc In Crypto'}
                    url={'https://wocincrypto.com/'}
                    alt={'Woc In Crypto'}
                />
                <Project
                    img={'/gidisquare.png'}
                    category={'Web Dev.'}
                    txt={'Discover seamless convenience with GidiSquare Market & Services, your trusted online marketplace for local services, gig economy solutions, and effortless e-commerce'}
                    project_name={'Gidisquare'}
                    url={'https://gidisquare.co.uk/'}
                    alt={'Gidisquare image'}
                />
                <Project
                    img={'/connectwork.png'}
                    category={'Web Dev.'}
                    txt={'Freelance And Home Service Made Easy'}
                    project_name={'Connect Work'}
                    url={'https://connectwork.netlify.app/'}
                    alt={'Connect Work image'}
                />
                <Project
                    img={'/project-mgmt.png'}
                    category={'Web Dev.'}
                    txt={'Project Management Hr'}
                    project_name={'Project Management Landing Page'}
                    url={'https://hydrogenproject.netlify.app/'}
                    alt={'Project Management image'}
                />
                <Project
                    img={'/prd-mgmt.png'}
                    category={'Web Dev.'}
                    txt={'Product Management Hr'}
                    project_name={'Product Management'}
                    url={'https://product-managementhr.netlify.app/'}
                    alt={'Product Management image'}
                />
                
                <Project
                    img={'/feedbackup.png'}
                    category={'Web Dev.'}
                    txt={'FeedBackUp is a products and services review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies and individuals to level up their game.'}
                    project_name={'Feedbackup'}
                    url={'https://feedbackup.vercel.app/'}
                    alt={'Feedbackup preview image'}
                />
                {/* <Project
                    img={'/portfolio.png'}
                    category={'Web Dev.'}
                    txt={'This is my person portfolio website (v1). Built with Next Js.'}
                    project_name={'Ayomide Ishola Portfolio Website - (v1)'}
                    url={'https://ay4codes.vercel.app/'}
                    alt={'My Portfolio preview image'}
                />
                <Project
                    img={'/payme.png'}
                    category={'Web Dev.'}
                    txt={'Payme is a web app that helps in keeping record of transactions with automatic sms reminder every morning to not loose track of your money.'}
                    project_name={'Payme'}
                    url={'https://pay-me.onrender.com/'}
                    alt={'Payme preview image'}
                />
                <Project
                    img={'/labongoes.png'}
                    category={'Web Dev.'}
                    txt={'A shopping cart system that sends customer order to the receptionist email. Built with React Js.'}
                    project_name={'A shopping cart system'}
                    url={'https://labongoes.vercel.app/'}
                    alt={'Shopping cart system preview image'}
                />
                <Project
                    img={'/dryjokes.png'}
                    category={'Web Dev.'}
                    txt={'A simple web app that gives a random “dry” joke using third-party API services.'}
                    project_name={'Dry Jokes'}
                    url={'https://ay4codes.github.io/DryJokes/'}
                    alt={'Dry Jokes preview image'}
                /> */}
            </div>
        </div>
    )
}