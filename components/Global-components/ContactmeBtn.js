import Link from "next/link"


export default function ContactMeBtn() {
    return (
        <div className="mt-14 contact-me-btn2 w-full">
            <Link className="w-full flex justify-center" href={'/contact'}><button className="">Contact me</button></Link>
        </div>
    )
}