

export default function SectionTitle(props) {
    return (
        <div className="section-title-wrapper w-full">
            <div className="section-title-btn-icon rounded-full"></div>
            <div><span>{props.title}</span></div>
        </div>
    )
}