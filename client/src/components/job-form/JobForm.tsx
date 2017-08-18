import * as React from 'react';
import './JobForm.css';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import ApplicantInfo from './applicant-info/ApplicantInfo';
import { CircularProgress } from "material-ui";
import JobLocation from './job-location/JobLocation';
import Education from './education/Education';
import Certification from './certification/Certification';
import EmployementHistory from './employment-history/EmploymentHistory';
import PersonalInfo from './personal-info/PersonalInfo';
import Skills from './skills/Skills';
import Media from './media/Media';
import EqualOpportunity from './equal-opportunity/EqualOpportunity';
import Transportation from './transportation/Transportation';
import References from './references/References';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { withRouter, browserHistory } from "react-router"
import StateManager from "../../service/stateManage";
import LinearProgress from 'material-ui/LinearProgress';

class MainJobForm extends React.Component<any, any>{
    jobDataEn: any = {};
    jobDataSp: any = {};
    selectedJson: any = {};

    constructor(props: any) {
        super(props);
        //import json of both language
        this.jobDataEn = require('../../assets/json/job-en');
        this.jobDataSp = require('../../assets/json/job-sp');
        //state of the component
        this.state = {
            finished: false,
            stepIndex:0,
            selectedJson: this.jobDataEn,
            visited: [],
            open: true
        };
        //Observable binding with state of component
        StateManager.stepperObserver.next(this.state);
    }

    //handling state of the form and store form in local storage
    handleNext = (url: any, e: any) => {
        switch (url) {
            case 'application-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'job-location':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'education-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'personal-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'media-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'equal-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'transportation-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'education-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'employment-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'skills-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'reference-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            case 'certification-form':
                localStorage.setItem(url, JSON.stringify(e));
                break;
            default:
                console.log("Default Case")
        }
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 10,
            visited: this.state.visited.concat(stepIndex)
        });
    }

    //handling state of the form
    handlePrev = (e: any) => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    //Calling Specific component on each form state
    getStepContent(stepIndex: any) {
        switch (stepIndex) {
            case 0:
                return <ApplicantInfo handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.applicationInformation} />;
            case 1:
                return <JobLocation handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.jobLocation} jsonData1={this.state.selectedJson.WorkHours} />;
            case 2:
                return <Education handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.educationTraining} />;
            case 3:
                return <EmployementHistory handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.employmentHistory} />;
            case 4:
                return <PersonalInfo handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.personalInformation} jsonData1={this.state.selectedJson.communication} />;
            case 5:
                return <Skills handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.lightIndustrialAndWarehousePositions} />;
            case 6:
                return <Media handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.media} />;
            case 7:
                return <EqualOpportunity handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.equalOpportunity} />;
            case 8:
                return <Transportation handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.transportation} />;
            case 9:
                return <References handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.references} />;
            case 10:
                return <Certification handleNext={(url: any, e: any) => this.handleNext(url, e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.certification} />;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    componentWillMount() {
        const { headings } = this.state.selectedJson;
        if (this.state.stepIndex === 0) {
            this.props.titleChanged(headings.applicationInformation)
        }
        StateManager.stepperObserver.next(this.state);
    }

    componentDidUpdate() {
        const { headings } = this.state.selectedJson;

        //Change navbar title according to that job component stepper state
        switch (this.state.stepIndex) {
            case 0:
                return this.props.titleChanged(headings.applicationInformation);
            case 1:
                return this.props.titleChanged(headings.jobLocation);
            case 2:
                return this.props.titleChanged(headings.educationTraining);
            case 3:
                return this.props.titleChanged(headings.employementHistory);
            case 4:
                return this.props.titleChanged(headings.personalInformation);
            case 5:
                return this.props.titleChanged(headings.lightIndustrialSkills);
            case 6:
                return this.props.titleChanged(headings.media);
            case 7:
                return this.props.titleChanged(headings.equalOpportunity);
            case 8:
                return this.props.titleChanged(headings.transportation);
            case 9:
                return this.props.titleChanged(headings.references);
            case 10:
                return this.props.titleChanged(headings.certification);
            default:
                return this.props.titleChanged("You'r all set!")
        }
    }

    componentWillReceiveProps(nextProp: any) {
        //select user selected language
        let userSelectedJson = nextProp.language === "en" ? this.jobDataEn : this.jobDataSp;
        this.setState({ selectedJson: userSelectedJson })
    }

    //save specific form state data in local storage
    parsingLocalStorage = (value: any) => {
        let data: any = localStorage.getItem(value);
        data = JSON.parse(data);
        let user: any = localStorage.getItem('user-info');
        let job_id: any = localStorage.getItem('job-id');
        data = Object.assign({ user_id: JSON.parse(user)[0].id, job_id: parseInt(job_id) }, data);
        return data;
    }

    //dialog close function
    handleClose = () => {
        //Saving Form Data
        let formData = {
            "application_form": this.parsingLocalStorage('application-form'),
            "job_location": this.parsingLocalStorage('job-location'),
            "education_form": this.parsingLocalStorage('education-form'),
            "certification_form": this.parsingLocalStorage('certification-form'),
            "employment_form": this.parsingLocalStorage('employment-form'),
            "equal_form": this.parsingLocalStorage('equal-form'),
            "media_form": this.parsingLocalStorage('media-form'),
            "personal_form": this.parsingLocalStorage('personal-form'),
            "reference_form": this.parsingLocalStorage('reference-form'),
            "skills_form": this.parsingLocalStorage('skills-form'),
            "transportation_form": this.parsingLocalStorage('transportation-form'),
        }
        this.setState({ open: false, finished: false, stepIndex: this.state.stepIndex - 2 });
        //dispatch action and send data to server
        this.props.applyJob(formData);
    };

    render() {
        const { stepperheadings } = this.state.selectedJson;
        StateManager.stepperObserver.next(this.state);
        //action button of dialog box
        const actions = [
            <FlatButton
                label="Done"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        const { finished, stepIndex } = this.state;
        // const { headings } = this.state.selectedJson;
        //after success job submitted. It route to main page
        this.props.jobObj.success ? browserHistory.push("/") : null;
        return (
            //checking the state of loader
            this.props.jobObj.isLoading ? <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)"
                style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} /> :
                <div className="main-job-form-container">
                    {/*Stepper for Desktop*/}
                    <div className="md-stepper stepper-style">
                        <div className="stepper-main-content">
                            <div className="stepper-header">
                                {stepperheadings[stepIndex]}
                            </div>
                            <div className="counting-stepper">
                                <span style={{color:"#293fa3",fontWeight:"bold"}}>{stepIndex + 1}</span> <span style={{color:"#7684c4"}}>of 12</span>
                                </div>
                        </div>
                        <div className="stepper-loader">
                            <LinearProgress color="rgba(107,176,255,1)" style={Styling.progressBar} mode="determinate" value={stepIndex + 1} max={12} />
                        </div>

                        {/*<Stepper activeStep={stepIndex} style={{ 'flexWrap': 'wrap' }}>
                            <Step>
                                <StepButton completed={stepIndex === 0 ? false : this.state.visited.indexOf(0) !== -1} onClick={() => this.setState({ stepIndex: 0 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.applicationInformation}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 1 ? false : this.state.visited.indexOf(1) !== -1} disabled={this.state.visited.indexOf(0) === -1} onClick={() => this.setState({ stepIndex: 1 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.jobLocation}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 2 ? false : this.state.visited.indexOf(2) !== -1} disabled={this.state.visited.indexOf(1) == -1} onClick={() => this.setState({ stepIndex: 2 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.educationTraining}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 3 ? false : this.state.visited.indexOf(3) !== -1} disabled={this.state.visited.indexOf(2) == -1} onClick={() => this.setState({ stepIndex: 3 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.employementHistory}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 4 ? false : this.state.visited.indexOf(4) !== -1} disabled={this.state.visited.indexOf(3) == -1} onClick={() => this.setState({ stepIndex: 4 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.personalInformation}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 5 ? false : this.state.visited.indexOf(5) !== -1} disabled={this.state.visited.indexOf(4) == -1} onClick={() => this.setState({ stepIndex: 5 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.lightIndustrialSkills}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 6 ? false : this.state.visited.indexOf(6) !== -1} disabled={this.state.visited.indexOf(5) == -1} onClick={() => this.setState({ stepIndex: 6 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.media}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 7 ? false : this.state.visited.indexOf(7) !== -1} disabled={this.state.visited.indexOf(6) == -1} onClick={() => this.setState({ stepIndex: 7 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.equalOpportunity}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 8 ? false : this.state.visited.indexOf(8) !== -1} disabled={this.state.visited.indexOf(7) == -1} onClick={() => this.setState({ stepIndex: 8 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.transportation}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 9 ? false : this.state.visited.indexOf(9) !== -1} disabled={this.state.visited.indexOf(8) == -1} onClick={() => this.setState({ stepIndex: 9 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.references}</StepButton>
                            </Step>
                            <Step>
                                <StepButton completed={stepIndex === 10 ? false : this.state.visited.indexOf(10) !== -1} disabled={this.state.visited.indexOf(9) == -1} onClick={() => this.setState({ stepIndex: 10 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}>{headings.certification}</StepButton>
                            </Step>
                        </Stepper>*/}
                    </div>
                    {/*stepper for mobile*/}
                    <div className="sm-stepper">
                        <Stepper activeStep={stepIndex} style={{ 'flexWrap': 'wrap' }}  >
                            <Step><StepButton completed={stepIndex === 0 ? false : this.state.visited.indexOf(0) !== -1} onClick={() => this.setState({ stepIndex: 0 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 1 ? false : this.state.visited.indexOf(1) !== -1} disabled={this.state.visited.indexOf(0) === -1} onClick={() => this.setState({ stepIndex: 1 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 2 ? false : this.state.visited.indexOf(2) !== -1} disabled={this.state.visited.indexOf(1) == -1} onClick={() => this.setState({ stepIndex: 2 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 3 ? false : this.state.visited.indexOf(3) !== -1} disabled={this.state.visited.indexOf(2) == -1} onClick={() => this.setState({ stepIndex: 3 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 4 ? false : this.state.visited.indexOf(4) !== -1} disabled={this.state.visited.indexOf(3) == -1} onClick={() => this.setState({ stepIndex: 4 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 5 ? false : this.state.visited.indexOf(5) !== -1} disabled={this.state.visited.indexOf(4) == -1} onClick={() => this.setState({ stepIndex: 5 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 6 ? false : this.state.visited.indexOf(6) !== -1} disabled={this.state.visited.indexOf(5) == -1} onClick={() => this.setState({ stepIndex: 6 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 7 ? false : this.state.visited.indexOf(7) !== -1} disabled={this.state.visited.indexOf(6) == -1} onClick={() => this.setState({ stepIndex: 7 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 8 ? false : this.state.visited.indexOf(8) !== -1} disabled={this.state.visited.indexOf(7) == -1} onClick={() => this.setState({ stepIndex: 8 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 9 ? false : this.state.visited.indexOf(9) !== -1} disabled={this.state.visited.indexOf(8) == -1} onClick={() => this.setState({ stepIndex: 9 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                            <Step><StepButton completed={stepIndex === 10 ? false : this.state.visited.indexOf(10) !== -1} disabled={this.state.visited.indexOf(9) == -1} onClick={() => this.setState({ stepIndex: 10 })} style={{ backgroundColor: 'rgba(0,0,0,0)' }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        </Stepper>
                    </div>
                    <div className="main-content">
                        <div className="stepper-content">
                            {finished ? (
                                <Dialog
                                    title="Congratulations!"
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                >
                                    You're all set! We will be in touch
        </Dialog>) : (
                                    <div>
                                        <div>{this.getStepContent(stepIndex)}</div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(MainJobForm);

const Styling = {
    progressBar:{
        height:"9px",backgroundColor:"white",borderRadius:"50px",marginTop:"7px"
    }
}

