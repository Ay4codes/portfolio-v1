export default function Skills(props) {
    return (
        <div className="skills-wrapper">
            <p>{props.title}</p>
            <div className="skills-innner">
                <div style={{width: `${props.percent}%`}} className="skills-content">{props.percent}%</div>
            </div>
        </div>
    )
}