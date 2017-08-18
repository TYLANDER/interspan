import * as React from "react";
import "./footer.css";

class Footer extends React.Component<any, any> {
    render() {
        return (
            <div className="footer-container-main">
                <div className="icon">
                    <img src={require("../../assets/logo.jpg")} />
                </div>
                <div className="social-media">
                    <a href="#"><img width="40px" src={require("../../assets/insta.jpg")} /></a>
                    <a href="#"><img width="40px" src={require("../../assets/fb.jpg")} /></a>
                    <a href="#"><img width="40px" src={require("../../assets/twitter.jpg")} /></a>

                </div>
                <div className="copyright">
                    &copy; Interspan 2017 - All Right Reserved
             </div>
            </div>
        )
    }
}

export default Footer;