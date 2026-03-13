import "./ComingSoonCard.css";
import logo from "../../assets/youmax.png";

function ComingSoonCard() {
    return (
        <div className="container">
            <div className="glass">

                <img src={logo} alt="Youmax Logo" className="mainLogo" />

                <div className="ytButton">
                    ▶ Visit YouTube Channel
                </div>

            </div>
        </div>
    );
}

export default ComingSoonCard;