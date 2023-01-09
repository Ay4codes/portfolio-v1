import Image from "next/image"

export default function Expertise(props) {
    return (
        <div className="expertise-wrapper">
            <div>
                <Image width={100} height={100} src={`${props.img}`} alt={`${props.alt}`} />
                <h3 className="text-center">{props.title}</h3>
                <p className="text-center">{props.desc}</p>
            </div>
        </div>
    )
}