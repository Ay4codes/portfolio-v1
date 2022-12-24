import SectionTitle from "../Global-components/SectionTitle"
import Expertise from "../Global-components/Expertise"

export default function Home2ndSection() {
    return (
        <div className='home-second-section-wrapper'>
            <div className="home-second-section-inner">
                <SectionTitle title={'My Expertise'} />
                <div className="home-second-section-inner-grid content-center">
                    <div className="w-full">
                        <Expertise
                            img={'/webdev-icon.png'}
                            alt={'Web Development Icon'}
                            title={'Web Development'}
                            desc={'Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.'}
                        />
                    </div>
                    <div className="w-full">
                        <Expertise
                            img={'/api-icon.png'}
                            alt={'Api Icon'}
                            title={'Api Development'}
                            desc={'API (Application Programming Interface software) is a set of instructions, standards or requirements that enables a software or app to employ features/services of another app.'}
                        />
                    </div>
                    <div className="w-full">
                        <Expertise
                            img={'/api-icon.png'}
                            alt={'Api Icon'}
                            title={'Api Development'}
                            desc={'Desc'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}