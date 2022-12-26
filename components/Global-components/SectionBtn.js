import Link from "next/link"


export default function SectionBtn(props) {
    return (
        <div className="mt-14 contact-me-btn2 w-full">
            <Link className="w-full flex justify-center" href={`${props.linkTo}`}><button className="">{props.title}</button></Link>
        </div>
    )
}