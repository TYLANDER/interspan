import * as React from 'react';
import './Home.css';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { RaisedButton } from 'material-ui'
import { browserHistory } from 'react-router'
import JobActions from '../../../src/store/action/jobs';
import { connect } from "react-redux";

class Home extends React.Component<any, any> {
    state = {
        panelArray: [
            {
                title: 'Light Industrial Worker',
                location: 'Elements, outside',
                duration: 'part-Time',
                hrs: '8AM-4PM',
                compensation: 'Competitive hourly rate with overtime available.',
                desc: `Performing work in a storage/warehouse settinfg managing different capabilities which may or may not include: product packing,
                fulfillment, loading, unloading, transportation, shipping/delivery, and operation of machinery.`,
                showMore: false
            },
            {
                title: 'Light Industrial Worker',
                location: 'Elements, outside',
                duration: 'part-Time',
                hrs: '8AM-4PM',
                compensation: 'Competitive hourly rate with overtime available.',
                desc: `Performing work in a storage/warehouse settinfg managing different capabilities which may or may not include: product packing,
                fulfillment, loading, unloading, transportation, shipping/delivery, and operation of machinery.`,
                showMore: false
            },
            {
                title: 'Light Industrial Worker',
                location: 'Elements, outside',
                duration: 'part-Time',
                hrs: '8AM-4PM',
                compensation: 'Competitive hourly rate with overtime available.',
                desc: `Performing work in a storage/warehouse settinfg managing different capabilities which may or may not include: product packing,
                fulfillment, loading, unloading, transportation, shipping/delivery, and operation of machinery.`,
                showMore: false
            },
            {
                title: 'Light Industrial Worker',
                location: 'Elements, outside',
                duration: 'part-Time',
                hrs: '8AM-4PM',
                compensation: 'Competitive hourly rate with overtime available.',
                desc: `Performing work in a storage/warehouse settinfg managing different capabilities which may or may not include: product packing,
                fulfillment, loading, unloading, transportation, shipping/delivery, and operation of machinery.`,
                showMore: false
            },
            {
                title: 'Light Industrial Worker',
                location: 'Elements, outside',
                duration: 'part-Time',
                hrs: '8AM-4PM',
                compensation: 'Competitive hourly rate with overtime available.',
                desc: `Performing work in a storage/warehouse settinfg managing different capabilities which may or may not include: product packing,
                fulfillment, loading, unloading, transportation, shipping/delivery, and operation of machinery.`,
                showMore: false
            },
            {
                title: 'Light Industrial Worker',
                location: 'Elements, outside',
                duration: 'part-Time',
                hrs: '8AM-4PM',
                compensation: 'Competitive hourly rate with overtime available.',
                desc: `Performing work in a storage/warehouse settinfg managing different capabilities which may or may not include: product packing,
                fulfillment, loading, unloading, transportation, shipping/delivery, and operation of machinery.`,
                showMore: false
            }
        ],
        panelArray1: [{showMore:false}]
    };
    gettingData = false;
    panelArray: any;

    constructor(props:any){
        super(props);
        this.props.getAllJobs();
    }
    componentWillReceiveProps(){
        if(this.props.isLoading)
            this.gettingData = true;
         if(this.props && !this.props.isLoading && this.props.allJobs.length){
            let alljobs:any = this.props.alljobs;
            debugger
            alljobs = alljobs.map((job:any)=>{
                job.showMore = false;
            })
            this.setState({ panelArray1: alljobs })
         }
    }
    showDescription(obj: any, ind: any) {
        this.state.panelArray[ind].showMore = !this.state.panelArray[ind].showMore;
        this.setState({ panelArray: this.state.panelArray })
    };

    handleJobApply() {
        browserHistory.push('/signup');
    }

    render() {

        this.panelArray = (
            this.state.panelArray.map((jobObj: any, i: number) => {
                return (
                    <Paper zDepth={2} key={i} className="apply-paper">
                        <div className="paper-container">

                            {jobObj.showMore ?
                                <img src={require("../../assets/window-close.svg")} className="cross-btn"
                                     onClick={this.showDescription.bind(this, jobObj, i)}/>
                                : null}

                            <h3>{jobObj.title}</h3>
                            <div className="text-left">
                                <div>
                                    <span className="label-title">Location: </span>
                                    <span>{jobObj.location}</span>
                                </div>
                                <div>
                                    <span className="label-title">Duration: </span>
                                    <span>{jobObj.duration}</span>
                                </div>
                                <div>
                                    <span className="label-title">Hours: </span>
                                    <span>{jobObj.hrs}</span>
                                </div>

                                {jobObj.showMore ?
                                    <div className="showMoreDesc-container">
                                        <div>
                                            <span className="label-title">Description: </span>
                                            <span>{jobObj.desc}</span>
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
                                <FlatButton label="APPLY" className="apply-job-btn" onClick={this.handleJobApply}/>
                            </div>
                            :
                            <div className="text-left footer-container">
                                <FlatButton label="MORE" onClick={this.showDescription.bind(this, jobObj, i)} />
                                <FlatButton label="APPLY" onClick={this.handleJobApply} />
                            </div>
                        }
                    </Paper>
                )
            })
        );
        return (
            <div className="home-container">
                {this.props.children}
                <div className="home-header-container">
                    <h2 className="title"> We span the gap</h2>
                    <div className="title-desc">
                        InterSpan provides quality employees to companies that need them.
                    </div>

                    <p className="apply-desc">
                        We have open positions now, and applying is easy.
                    </p>
                    <RaisedButton primary label="Apply"onClick={this.handleJobApply} />
                    <h1>Positions</h1>
                </div>
                <div className="paper-parent">
                    {this.panelArray}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        allJobs: state.jobReducer['allJobs'],
        isLoading: state.jobReducer['isLoading'],
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllJobs: (): void => dispatch(JobActions.getAllJobs())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);