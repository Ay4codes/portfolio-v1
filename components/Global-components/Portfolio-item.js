import Link from "next/link"

export default function Project(props) {
    return (
        <div className="project-wrapper">
            <div className="project-img-wrapper">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="project-content-wrapper">
                <button className="project-title-btn">{props.category}</button>
                <div className="project-txt-content">
                    <h3>{props.project_name}</h3>
                    <p>{props.txt}</p>
                    <Link href={`${props.url}`} target="_blank" rel="noopener noreferrer">
                        <button>View Project</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}