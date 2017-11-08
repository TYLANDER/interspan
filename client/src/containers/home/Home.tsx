import * as React from 'react';
import './Home.css';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
// import { RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';
import JobActions from '../../../src/store/action/jobs';
import AuthActions from '../../../src/store/action/auth';
import { connect } from 'react-redux';
import Styling from "../../components/job-form/jobTheme";
import Footer from "../../components/footer/footer";
import "../../assets/carousel.css";
const Carousel = require('react-responsive-carousel').Carousel;

class Home extends React.Component<any, any> {
    gettingData = false;
    panelArray: any;
    carouselRef: any;
    carouselArray = [
        {
            title: '-- Jesse Hudson, UI/UX designer',
            contents: '   "It was so worth it to get a Nanodegree. Seeing that first paycheck, I couldn’t believe it. I never thought I’d be here. It’s like a dream."'
        },
        {
            title: '-- Jesse Hudson, UI/UX designer',
            contents: '   "It was so worth it to get a Nanodegree. Seeing that first paycheck, I couldn’t believe it. I never thought I’d be here. It’s like a dream."'
        },
    ];

    constructor(props: any) {
        super(props);

        //Retreive all jobs from database
        if (!this.props.allJobs.length && !this.props.allJobs.data) {
            this.props.getAllJobs();
        }
        this.state = {
            panelArray: [{ showMore: false }],
            carouselElement: "",
            status: 0
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (!nextProps.isLoading)
            if (nextProps.allJobs && nextProps.allJobs.data.length) {
                let alljobs: any = nextProps.allJobs.data;
                alljobs = alljobs.map((job: any) => {
                    job.showMore = false;
                    return job;
                });
                this.setState({ panelArray: alljobs });
            }
    }

    componentWillMount() {
        if (this.props.allJobs.data && this.props.allJobs.data.length)
            if (this.props.allJobs && this.props.allJobs.data.length) {
                let alljobs: any = this.props.allJobs.data;
                alljobs = alljobs.map((job: any) => {
                    job.showMore = false;
                    return job;
                });
                this.setState({ panelArray: alljobs });
            }
    }

    //Handling show more description on card
    showDescription(obj: any, ind: any) {
        this.state.panelArray[ind].showMore = !this.state.panelArray[ind].showMore;
        this.setState({ panelArray: this.state.panelArray });
    }
    componentDidMount() {
        this.setState({ carouselElement: this.carouselRef })
    }
    //Save job id in local storage
    handleJobApply(key: any) {
        if (key) {
            localStorage.setItem('job-id', "1");
        }
        browserHistory.push('/job');
        localStorage.setItem("job-id", key)
    }

    render() {
        this.panelArray = (
            this.state.panelArray.map((jobObj: any, i: number) => {
                return (
                    <Paper zDepth={2} key={i} className="apply-paper" style={{ borderRadius: '6px',boxShadow:'0px 6px 12px rgba(46, 46, 46, 0.08)' }}>
                        <div className="paper-container">
                            {jobObj.showMore ?
                                <img src={require('../../assets/window-close.svg')} className="cross-btn"
                                    onClick={this.showDescription.bind(this, jobObj, i)} />
                                : null}
                            <h3>{jobObj.title}</h3>
                            <div className="text-left alignment">
                                <div>
                                    <span><img className="icon" src={require('../../assets/location.png')} /></span>
                                    <span className="label-title">Location: </span>
                                    <span className="label-desc">{jobObj.location}</span>
                                </div>
                                <div>
                                    <span><img className="icon" src={require('../../assets/duration.png')} /></span>
                                    <span className="label-title">Duration: </span>
                                    <span className="label-desc">{jobObj.duration}</span>
                                </div>
                                <div>
                                    <span><img className="icon" src={require('../../assets/hour.png')} /></span>
                                    <span className="label-title">Hours: </span>
                                    <span className="label-desc">{jobObj.hours}</span>
                                </div>
                                {jobObj.showMore ?
                                    <div className="showMoreDesc-container">
                                        <div>
                                            <span className="label-title">Description: </span>
                                            <span>{jobObj.description}</span>
                                        </div>
                                        <div>
                                            <span className="label-title">Compensation: </span>
                                            <span>{jobObj.compensation}</span>
                                        </div>
                                    </div>
                                    : null}

                            </div>
                        </div>
                        <div className="paper-bar"></div>
                        {jobObj.showMore ?
                            <div className="text-left footer-container">
                                <FlatButton label="Apply" style={{ backgroundColor: 'rgba(0,0,0,0)' }} labelStyle={{ color: '#494a49', fontFamily: 'calibre-semi-bold', fontSize: '16px' }}
                                    className="apply-job-btn" onClick={this.handleJobApply.bind(this, jobObj.id)} />
                            </div>
                            :
                            <div className="text-left footer-container">
                                <FlatButton label="More" className="more-button" style={{ backgroundColor: 'rgba(0,0,0,0)', width: "60px", minWidth: "none" }} labelStyle={{ color: '#3B7CFF', fontFamily: 'calibre-semi-bold', fontSize: '16px' }} onClick={this.showDescription.bind(this, jobObj, i)} />
                                <FlatButton label="Apply" className="apply-button-style" style={{ backgroundColor: 'rgba(0,0,0,0)', width: "60px", minWidth: "none" }} labelStyle={{ color: '#2e2e2e', fontFamily: 'calibre-semi-bold', fontSize: '16px', opacity: 0.58 }} onClick={this.handleJobApply.bind(this, jobObj.id)} />
                            </div>
                        }
                    </Paper>
                );
            })
        );
        return (
            <div className="home-container">
                {this.props.children}
                <div className="home-header-container">
                    <div className="header-body">
                        <img className="background-image" src={require('../../assets/back.png')} />
                        <img className="background-image-mobile" src={require('../../assets/back-mobile.png')} />
                        <div className="content">
                            <p className="title">We span the gap</p>
                            <div className="title-desc">
                                InterSpan has been matching employees to jobs since 1995. 
                    </div>
                            <p className="apply-desc">
                                We have open positions now, and applying is easy.
                    </p>
                            <FlatButton labelStyle={Styling.buttonLabel} className="get-started-button hovered-class" style={Styling.addButton} label={<b>Get Started</b>} onClick={this.handleJobApply.bind(this, localStorage.getItem('job-id'))} />
                            <FlatButton labelStyle={Styling.buttonLabelApply} className="home-apply-button hovered-class" style={Styling.addButton} label={<b>Apply</b>} onClick={this.handleJobApply.bind(this, localStorage.getItem('job-id'))} />
                            <div className="scroll-down desktop-view" onClick={() => this.props.scrolling()}>
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
                        <div className="header-image desktop">
                            <img src={require("../../assets/bitmap.svg")} />
                        </div>
                        <div className="header-image mobile">
                            <img src={require("../../assets/mobile-header-2.svg")} />
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

                    {/*<h2 className="title"> We span the gap</h2>
                    <div className="title-desc">
                        InterSpan provides quality employees to companies that need them.
                    </div>
                    <p className="apply-desc">
                        We have open positions now, and applying is easy.
                    </p>*/}
                    {/*<RaisedButton primary label="Apply" labelStyle={{ textTransform: 'capitalize' }} className="apply" onClick={this.handleJobApply.bind(this, localStorage.getItem('job-id'))} />
                    <h2>Positions</h2>*/}
                </div>
                {/*<div className="width-limit">*/}
                <div className="paper-parent-container">
                    <div className="main-paper-parent">
                        <h2 className="paper-title">Positions</h2>
                        <div className="paper-parent">
                            {this.props.isLoading ?
                                <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)" style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} />
                                : this.panelArray}
                        </div>
                    </div>
                </div>

                <div className="slider-section">
                    <Carousel onChange={(event: any) => this.setState({ status: event })} ref={(event: any) => this.carouselRef = event} showIndicators={false} showThumb={false} showStatus={false} showArrows={false}>
                        {this.carouselArray.map((arr, id) => {
                            return (
                                <div key={id} className="carousel-contents">
                                    <p className="carousel-title">
                                        {arr.title}
                                    </p>
                                    <p className="contents">
                                        {arr.contents}
                                    </p>
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className='carousel-dots'>
                        {this.state.carouselElement.state ? this.carouselArray.map((arr, index) => {
                            if (this.state.status == index) {
                                return <img key={index} onClick={(e) => { this.carouselRef.selectItem({ selectedItem: index }) }} src={require('../../assets/Group.svg')} />
                            }
                            else {
                                return <img key={index} onClick={(e) => { this.carouselRef.selectItem({ selectedItem: index }) }} src={require('../../assets/Dot.svg')} />

                            }
                        }) : <div></div>}
                    </div>
                    <div className="arrow-next">
                        <img src={require("../../assets/arrow-caro.png")} onClick={() => this.carouselRef.decrement()} />
                    </div>
                    <div className="arrow-prev">
                        <img src={require("../../assets/prev-carp.png")} onClick={() => this.carouselRef.moveTo(this.carouselRef.state.selectedItem + 1)} />
                    </div>

                    {/*</div>*/}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        allJobs: state.jobReducer.allJobs,
        isLoading: state.jobReducer.isLoading,
        authObj: state.AuthReducer
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllJobs: (): void => dispatch(JobActions.getAllJobs()),
        logout: (): void => dispatch(AuthActions.logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
