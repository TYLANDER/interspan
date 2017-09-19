import * as React from "react";
import "./footer.css";

class Footer extends React.Component<any, any> {
    render() {
        return (
            <div className="md-stepper footer-container-main">
                <div className="icon">
                    <img src={require("../../assets/logo.svg")} />
                </div>
                <div className="social-media">
                    <a href="#"><img src={require("../../assets/insta.svg")} /></a>
                    <a href="#"><img src={require("../../assets/fb.svg")} /></a>
                    <a href="#"><img src={require("../../assets/twitter.svg")} /></a>

                </div>
                <div className="copyright">
                    &copy; Interspan 2017 - All Right Reserved
             </div>
            </div>
        )
    }
}

export default Footer;