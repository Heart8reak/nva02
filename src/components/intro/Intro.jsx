import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="vidContainer">
                <video src="../asset/video/edit_vid_1_3.mov" autoPlay loop muted />
            </div>
        </div>
    )
}
