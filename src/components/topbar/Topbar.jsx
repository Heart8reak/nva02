import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar active">
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">Nona White 14</a>
                </div>

                <h2>Is this working</h2>

                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
 