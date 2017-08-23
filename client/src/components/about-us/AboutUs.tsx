import * as React from 'react';
import './AboutUs.css';
import Footer from "../../components/footer/footer";
// import Styling from "../../components/job-form/jobTheme";
import FlatButton from 'material-ui/FlatButton';
class AboutUs extends React.Component<any, any> {

    render() {
        return (
            <div className="home-container">
                <div className="home-header-container">
                    <div className="header-body">
                        <img className="background-image" src={require('../../assets/back.png')} />
                        <img className="background-image-mobile" src={require('../../assets/back-mobile.png')} />
                        <div className="content">
                            <h2 className="title"> About us</h2>
                            <div className="title-desc">
                                Spanning the gap. Lorem ipsum dolar sit amer, consectetuer adispiscing elit, swed diam nonummy
                    </div>
                            {/*<p className="apply-desc">
                                We have open positions now, and applying is easy.
                    </p>*/}
                        </div>
                        <div className="header-image">
                            <img src={require("../../assets/about-image.png")} />
                        </div>

                    </div>
                    <div className="scroll-down">
                        <span className="icon-mobile">
                            <img src={require("../../assets/mobile-arrow.png")} />
                        </span>
                        <span className="icon">
                            <img src={require("../../assets/arrow-down.svg")} />
                        </span>

                        <span className="text">
                            SCROLL DOWN
                       </span>
                    </div>
                </div>
                <div className="aboutus-content">
                    <p className="first"> In 1995 Mike Daugherty Sr. (Mr. Mike) and his daughter, Wanda Klein, noticed a gap. They knew that there were many people in Richmond, Virginia seeking employment and that there were many companies in the area looking for quality employees</p>
                    <p className="second">Mr. Mike had just retired from a 30+ year career in production and manufacturing, much of it spent in personnel management, and Wanda had several years of experience as head of accounting and human resources at a pharmaceutical company. They decided to combine their strengths and work experience to build a bridge that would span the gap between employer and employee.</p>
                    <p className="second">Mr. Mike and Wanda called their bridge InterSpan and opened the business in April 1995. They believed that a local, family operated staffing agency could provide better service to industrial and manufacturing businesses in the Richmond area. They also believed that their temporary employees should be treated like family and given the attention and opportunities they deserved. With Mr. Mike’s experience as a personnel manager, Wanda’s accounting and business sense, and family values integrated into business practice they were able to span the gap and earn the trust of countless employers and employees.</p>
                    <p className="last">Since its humble beginnings in 1995, InterSpan has grown to employ three generations of Mr. Mike’s family as well as 500+ temporary employees at many job sites in the Richmond area. Even though we have grown exponentially in the last 20+ years, we are still a local, family operated staffing agency who understands the needs of our clients and employees. InterSpan is the bridge that spans the gap between employers who need to keep production running and good employees looking for an opportunity. Our family values are what set us apart in the staffing industry. Every employee is our most important employee and every client is our most important client.</p>
                </div>
                <div className="contact-us">
                    <p className="text">
                        For <b> more information</b> on our services please contact us:
                        </p>
                        <FlatButton labelStyle={{color:"#3B7CFF"}} style={{borderRadius:"6px"}} hoverColor="none" backgroundColor="white" label="Contact us" />
                </div>
                <Footer />
            </div>

        );
    }
}

export default AboutUs;
