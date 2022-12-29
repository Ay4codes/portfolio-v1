

export default function Expertise(props) {
    return (
        <div className="expertise-wrapper">
            <div>
                <img src={`${props.img}`} alt={`${props.alt}`} />
                <h3 className="text-center">{props.title}</h3>
                <p className="text-center">{props.desc}</p>
            </div>
        </div>
    )
}