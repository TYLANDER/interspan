import * as React from 'react';
import './EmployeeInfo.css';
import FlatButton from 'material-ui/FlatButton';
import Footer from "../../components/footer/footer";

class EmployeeInfo extends React.Component<any, any> {
    render() {
        return (
            <div className="home-container">
                <div className="home-header-container">
                    <div className="header-body">
                        <img className="background-image" src={require('../../assets/back.png')} />
                        <img className="background-image-mobile" src={require('../../assets/back-mobile.png')} />
                        <div className="content">
                            <h2 className="title">Improve Your Bottom Line</h2>
                            <div className="title-desc">
                                As employee salary and benefit package costs continue to rise, profit margins continue to shrink - all in an intensively competitive marketplace. Sound like a familiar problem?
                    </div>
                            <div className="scroll-down desktop-view" onClick={() => this.props.scrolling()}>
                                <span className="icon-mobile">
                                    <img src={require("../../assets/mobile-arrow.png")} />
                                </span>
                                <span className="icon">
                                    <img src={require("../../assets/arrow-down.svg")} />
                                </span>
                            </div>
                            {/*<p className="apply-desc">
                                We have open positions now, and applying is easy.
                    </p>*/}
                        </div>
                        <div className="header-image desktop">
                            <img src={require("../../assets/emp1.svg")} />
                        </div>
                        <div className="header-image mobile">
                            <img src={require("../../assets/emp2.svg")} />
                        </div>

                    </div>
                    <div className="scroll-down mobile-view" onClick={() => this.props.scrolling()}>
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
                <div className="employee-content">
                    <p className="first"> InterSpan offers specialized workforce solutions tailored to each client’s needs. If you have labor needs we can help you meet them. As a family owned and operated business we are flexible and can meet the specific needs of you site. We take the time to screen candidates and make sure the right person is sent to your jobsite. We fill temporary and temp-to-permanent job assignments. In addition to placing someone with a job, we offer the following services:</p>
                    <div className="choices">
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Temporary Labor Assignments</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Temp to permanent Assignments</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Payroll Services</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Safety Programs</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Workers Compensation Insurance</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">The Patient Protection and Affordable Care Act (ObamaCare) Advisement.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-us employee">
                    <p className="text">
                       Let's discuss your staffing needs.
                        </p>
                    <FlatButton labelStyle={{ color: "#3B7CFF", textTransform: 'none', fontSize: '19px', fontWeight: 400, fontFamily: 'calibre-semi-bold', lineHeight: '51px' }} style={{ borderRadius: "6px" }} className="contact-us-button hovered-class" hoverColor="none" backgroundColor="white" label="Contact us" />
                </div>
                <Footer />
            </div>

        );
    }
}

export default EmployeeInfo;
