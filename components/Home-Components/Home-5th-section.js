import SectionTitle from "../Global-components/SectionTitle"


export default function Home5thSection() {
    return (
        <div className="home-5th-section-wrapper">
            <SectionTitle title={"Don't take my words for it."} />
            <div className="home-5th-section-inner">
                <div className="home-5th-content-wrapper">
                <iframe src="https://feedbackup.vercel.app/feedback/63d02425d9da11701fc259e9" width={"350px"} height={"240px"} style={{borderRadius: '15px', boxShadow: "0px 1px 12px 6px rgba(234, 76, 137, 0.21)"}} frameborder="0" marginheight="0" marginwidth="0" />
                </div>
                <div className="home-5th-content-wrapper home-5th-content-wrapper2">
                    <iframe src="https://feedbackup.vercel.app/feedback/63d02518b984828c2cfaca0e" width={"350px"} height={"240px"} style={{borderRadius: '15px', boxShadow: "0px 1px 12px 6px rgba(234, 76, 137, 0.21)"}} frameborder="0" marginheight="0" marginwidth="0" />
                    <iframe src="https://feedbackup.vercel.app/feedback/63d0268ab984828c2cfad113" width={"350px"} height={"240px"} style={{borderRadius: '15px', boxShadow: "0px 1px 12px 6px rgba(234, 76, 137, 0.21)"}} frameborder="0" marginheight="0" marginwidth="0" />
                </div>
            </div>
        </div>
    )
}