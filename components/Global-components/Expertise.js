

export default function Expertise(props) {
    return (
        <div className="expertise-wrapper py-7 px-5">
            <div>
                <img src={`${props.img}`} alt={`${props.alt}`} />
                <h3 className="text-center mt-4">{props.title}</h3>
                <p className="text-center mt-2">{props.desc}</p>
            </div>
        </div>
    )
}