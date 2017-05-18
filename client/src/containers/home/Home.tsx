import * as React from 'react';
import './Home.css';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';
import JobActions from '../../../src/store/action/jobs';
import AuthActions from '../../../src/store/action/auth';
import { connect } from 'react-redux';

class Home extends React.Component<any, any> {
    state = {
        panelArray: [{ showMore: false }]
    };
    gettingData = false;
    panelArray: any;

    constructor(props: any) {
        super(props);
        if (!this.props.allJobs.length && !this.props.allJobs.data) {
            this.props.getAllJobs();
        }
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
        if (this.props.authObj.isAuthenticated) {
            this.props.logout();
        }
    }
    showDescription(obj: any, ind: any) {
        this.state.panelArray[ind].showMore = !this.state.panelArray[ind].showMore;
        this.setState({ panelArray: this.state.panelArray });
    }

    handleJobApply() {
        browserHistory.push('/signup');
    }

    render() {

        this.panelArray = (
            this.state.panelArray.map((jobObj: any, i: number) => {
                return (
                    <Paper zDepth={2} key={i} className="apply-paper" style={{ borderRadius: '2px', boxShadow: 'rgba(76, 0, 0, 0.08) 0px 6px 8px' }}>
                        <div className="paper-container">

                            {jobObj.showMore ?
                                <img src={require('../../assets/window-close.svg')} className="cross-btn"
                                    onClick={this.showDescription.bind(this, jobObj, i)} />
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
                                    <span>{jobObj.hours}</span>
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
                                <FlatButton label="Apply" style={{ backgroundColor: 'rgba(0,0,0,0)' }} labelStyle={{ color: '#494a49' }}
                                    className="apply-job-btn" onClick={this.handleJobApply} />
                            </div>
                            :
                            <div className="text-left footer-container">
                                <FlatButton label="More" style={{ backgroundColor: 'rgba(0,0,0,0)' }} labelStyle={{ color: '#494a49', fontFamily: 'SFUI_Text' }} onClick={this.showDescription.bind(this, jobObj, i)} />
                                <FlatButton label="Apply" style={{ backgroundColor: 'rgba(0,0,0,0)' }} labelStyle={{ color: '#494a49', fontFamily: 'SFUI_Text' }} onClick={this.handleJobApply} />
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
                    <h2 className="title"> We span the gap</h2>
                    <div className="title-desc">
                        InterSpan provides quality employees to companies that need them.
                    </div>

                    <p className="apply-desc">
                        We have open positions now, and applying is easy.
                    </p>
                    <RaisedButton primary label="Apply" labelStyle={{ textTransform: 'capitalize' }} className="apply" onClick={this.handleJobApply} />
                    <h2>Positions</h2>
                </div>
                <div className="paper-parent">
                    {this.props.isLoading ?
                        <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)" style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} />
                        : this.panelArray}
                </div>
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