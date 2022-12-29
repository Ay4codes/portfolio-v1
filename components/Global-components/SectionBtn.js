import Link from "next/link"


export default function SectionBtn(props) {
    return (
        <div className="contact-me-btn2">
            <Link style={{width: `${props.width}`}} href={`${props.linkTo}`}><button className="">{props.title}</button></Link>
        </div>
    )
}