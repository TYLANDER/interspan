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
                            <h2 className="title"> For Employers</h2>
                            <div className="title-desc">
                                Spanning the gap. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    </div>
                            {/*<p className="apply-desc">
                                We have open positions now, and applying is easy.
                    </p>*/}
                        </div>
                        <div className="header-image">
                            <img src={require("../../assets/employee-image.png")} />
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
                <div className="employee-content">
                    <p className="first"> InterSpan offers specialized workforce solutions tailored to each client’s needs. If you have labor needs we can help you meet them. As a family owned and operated business we are flexible and can meet the specific needs of you site. We take the time to screen candidates and make sure the right person is sent to your jobsite. We fill temporary and temp-to-permanent job assignments. Currently we specialize in light industrial placements including:</p>
                    <div className="choices">
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Value preposition</div>
                                <div className="choice-desc">Description</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Value preposition</div>
                                <div className="choice-desc">Description</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Value preposition</div>
                                <div className="choice-desc">Description</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Value preposition</div>
                                <div className="choice-desc">Description</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Value preposition</div>
                                <div className="choice-desc">Description</div>
                            </div>
                        </div>
                        <div className="seprator"></div>
                        <div className="template">
                            <div className="choice-icon"><img src={require("../../assets/checked.png")} /></div>
                            <div className="content">
                                <div className="choice-title">Value preposition</div>
                                <div className="choice-desc">Description</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                    <p className="text">
                        Interspan provides quality employees to companies that need them.
                        </p>
                    <FlatButton labelStyle={{ color: "#3B7CFF" }} style={{ borderRadius: "6px" }} hoverColor="none" backgroundColor="white" label="Contact us" />
                </div>
                <Footer />
            </div>

        );
    }
}

export default EmployeeInfo;
