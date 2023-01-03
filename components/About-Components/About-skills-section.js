import SectionTitle from "../Global-components/SectionTitle"
import Skills from "../Global-components/Skills"

export default function AboutSkillsSection() {
    const skillsArr = [
        {title: 'HTML/CSS', percent: "95"},
        {title: 'Javascript/Jquery', percent: '93'},
        {title: 'Tailwind CSS/Boostrap', percent: '80'},
        {title: 'ReactJs', percent: '91'},
        {title: 'NextJs', percent: '90'},
        {title: 'NodeJs', percent: '92'},
        {title: 'MongoDB', percent: '90'},
        {title: 'Linux', percent: '92'},
        {title: 'Documentation', percent: '87'},
        {title: 'Git/Github', percent: '96'}
    ]
    function CreateSkills(items) {
        return (
            <div><Skills percent={items.percent} title={items.title}/></div>
        )
    }
    return (
        <div className="about-2nd-section-wrapper">
            <SectionTitle title={'My Skills'} />
            <div className="about-2nd-section-content-wrapper">
                {skillsArr.map(CreateSkills)}
            </div>
        </div>
    )
}