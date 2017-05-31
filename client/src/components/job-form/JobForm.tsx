import * as React from 'react';
import './JobForm.css';
import {Link} from 'react-router';
import { Step, Stepper,StepButton} from 'material-ui/Stepper';
import ApplicantInfo from './applicant-info/ApplicantInfo';
import JobLocation from './job-location/JobLocation';
import Education from './education/Education';
import Certification from './certification/Certification';
import EmployementHistory from './employment-history/EmploymentHistory';
import PersonalInfo from './personal-info/PersonalInfo';
import LightIndustrialSkill from './light-industrial-skills/lightIndustrialSkills';
import Media from './media/Media';
import EqualOpportunity from './equal-opportunity/EqualOpportunity';
import WorkHour from './work-hours/WorkHours';
import Communication from './communication/Communication';
import Transportation from './transportation/Transportation';
import References from './references/References';

export default class MainJobForm extends React.Component<any, any>{

    jobDataEn: any = {};
    jobDataSp: any = {};
    selectedJson: any = {};

    constructor(props: any) {
        super(props);
        this.jobDataEn = require('../../assets/json/job-en');
        this.jobDataSp = require('../../assets/json/job-sp');
        this.state = {
            finished: false,
            stepIndex: 0,
            selectedJson: this.jobDataEn,
            visited:[]  
        };
    }

    handleNext = (e: any) => {
        const { stepIndex } = this.state;
        console.log(this.state.visited)
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 12,
            visited: this.state.visited.concat(stepIndex)
        });
        
    }

    handlePrev = (e: any) => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    getStepContent(stepIndex: any) {
        switch (stepIndex) {
            case 0:
                return <ApplicantInfo handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.applicationInformation} />;
            case 1:
                return <JobLocation handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.jobLocation} />;
            case 2:
                return <Education handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.educationTraining} />;
            case 3:
                return <EmployementHistory handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.employmentHistory} />;
            case 4:
                return <PersonalInfo handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.personalInformation} />;
            case 5:
                return <LightIndustrialSkill handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.lightIndustrialAndWarehousePositions} />;
            case 6:
                return <Media handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.media} />;
            case 7:
                return <EqualOpportunity handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.equalOpportunity} />;
            case 8:
                return <WorkHour handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.WorkHours} />;
            case 9:
                return <Communication handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.communication} />;
            case 10:
                return <Transportation handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.transportation} />;
            case 11:
                return <References handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.references} />;
            case 12:
                return <Certification handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.certification} />;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }
    titleBar() {
        const { headings } = this.state.selectedJson;
        switch (this.state.stepIndex) {
            case 1:
                this.props.titleChanged(headings.applicationInformation);
            default:
                console.log("Not Found");
        };
    }
    componentWillMount() {
        const { headings } = this.state.selectedJson;
        if (this.state.stepIndex === 0) {
            this.props.titleChanged(headings.applicationInformation)

        }
    }
    componentDidUpdate() {
        const { headings } = this.state.selectedJson;

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
                return this.props.titleChanged(headings.workHours);
            case 9:
                return this.props.titleChanged(headings.communication);
            case 10:
                return this.props.titleChanged(headings.transportation);
            case 11:
                return this.props.titleChanged(headings.references);
            case 12:
                return this.props.titleChanged(headings.certification);
            default:
                return this.props.titleChanged("You'r all set!")
        }
    }
    componentWillReceiveProps(nextProp: any) {
        // console.log(nextProp.language);
        let userSelectedJson = nextProp.language === "en" ? this.jobDataEn : this.jobDataSp;
        this.setState({ selectedJson: userSelectedJson })
    }

    render() {
        const { finished, stepIndex } = this.state;
        const { headings } = this.state.selectedJson;
        const contentStyle = { margin: '0 16px' };
        return (
            <div className="main-job-form-container">
                <div className="md-stepper">
                    <Stepper activeStep={stepIndex} style={{ 'flexWrap': 'wrap' }}>

                        <Step>
                            <StepButton completed={stepIndex===0?false:this.state.visited.indexOf(0) !== -1} onClick={()=>this.setState({stepIndex:0})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.applicationInformation}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===1?false:this.state.visited.indexOf(1) !== -1} disabled={this.state.visited.indexOf(0) === -1} onClick={()=>this.setState({stepIndex:1})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.jobLocation}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===2?false:this.state.visited.indexOf(2) !== -1} disabled={this.state.visited.indexOf(1) == -1} onClick={()=>this.setState({stepIndex:2})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.educationTraining}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===3?false:this.state.visited.indexOf(3) !== -1} disabled={this.state.visited.indexOf(2) == -1} onClick={()=>this.setState({stepIndex:3})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.employementHistory}</StepButton>
                        </Step>
                        <Step>
                           <StepButton completed={stepIndex===4?false:this.state.visited.indexOf(4) !== -1} disabled={this.state.visited.indexOf(3) == -1} onClick={()=>this.setState({stepIndex:4})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.personalInformation}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===5?false:this.state.visited.indexOf(5) !== -1} disabled={this.state.visited.indexOf(4) == -1} onClick={()=>this.setState({stepIndex:5})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.lightIndustrialSkills}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===6?false:this.state.visited.indexOf(6) !== -1} disabled={this.state.visited.indexOf(5) == -1} onClick={()=>this.setState({stepIndex:6})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.media}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===7?false:this.state.visited.indexOf(7) !== -1} disabled={this.state.visited.indexOf(6) == -1} onClick={()=>this.setState({stepIndex:7})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.equalOpportunity}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===8?false:this.state.visited.indexOf(8) !== -1} disabled={this.state.visited.indexOf(7) == -1} onClick={()=>this.setState({stepIndex:8})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.workHours}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===9?false:this.state.visited.indexOf(9) !== -1} disabled={this.state.visited.indexOf(8) == -1} onClick={()=>this.setState({stepIndex:9})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.communication}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===10?false:this.state.visited.indexOf(10) !== -1} disabled={this.state.visited.indexOf(9) == -1} onClick={()=>this.setState({stepIndex:10})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.transportation}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===11?false:this.state.visited.indexOf(11) !== -1} disabled={this.state.visited.indexOf(10) == -1} onClick={()=>this.setState({stepIndex:11})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.references}</StepButton>
                        </Step>
                        <Step>
                            <StepButton completed={stepIndex===12?false:this.state.visited.indexOf(12) !== -1} disabled={this.state.visited.indexOf(11) == -1} onClick={()=>this.setState({stepIndex:12})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}>{headings.certification}</StepButton>
                        </Step>
                        

                    </Stepper>
                </div>

                <div className="sm-stepper">
                    <Stepper activeStep={stepIndex} style={{ 'flexWrap': 'wrap' }}  >
                        <Step><StepButton completed={stepIndex===0?false:this.state.visited.indexOf(0) !== -1} onClick={()=>this.setState({stepIndex:0})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===1?false:this.state.visited.indexOf(1) !== -1} disabled={this.state.visited.indexOf(0) === -1} onClick={()=>this.setState({stepIndex:1})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===2?false:this.state.visited.indexOf(2) !== -1} disabled={this.state.visited.indexOf(1) == -1} onClick={()=>this.setState({stepIndex:2})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===3?false:this.state.visited.indexOf(3) !== -1} disabled={this.state.visited.indexOf(2) == -1} onClick={()=>this.setState({stepIndex:3})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===4?false:this.state.visited.indexOf(4) !== -1} disabled={this.state.visited.indexOf(3) == -1} onClick={()=>this.setState({stepIndex:4})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===5?false:this.state.visited.indexOf(5) !== -1} disabled={this.state.visited.indexOf(4) == -1} onClick={()=>this.setState({stepIndex:5})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===6?false:this.state.visited.indexOf(6) !== -1} disabled={this.state.visited.indexOf(5) == -1} onClick={()=>this.setState({stepIndex:6})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===7?false:this.state.visited.indexOf(7) !== -1} disabled={this.state.visited.indexOf(6) == -1} onClick={()=>this.setState({stepIndex:7})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===8?false:this.state.visited.indexOf(8) !== -1} disabled={this.state.visited.indexOf(7) == -1} onClick={()=>this.setState({stepIndex:8})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===9?false:this.state.visited.indexOf(9) !== -1} disabled={this.state.visited.indexOf(8) == -1} onClick={()=>this.setState({stepIndex:9})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===10?false:this.state.visited.indexOf(10) !== -1} disabled={this.state.visited.indexOf(9) == -1} onClick={()=>this.setState({stepIndex:10})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===11?false:this.state.visited.indexOf(11) !== -1} disabled={this.state.visited.indexOf(10) == -1} onClick={()=>this.setState({stepIndex:11})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                        <Step><StepButton completed={stepIndex===12?false:this.state.visited.indexOf(12) !== -1} disabled={this.state.visited.indexOf(11) == -1} onClick={()=>this.setState({stepIndex:12})} style={{ backgroundColor: 'rgba(0,0,0,0)'  }} disableTouchRipple={true} disableFocusRipple={true}></StepButton></Step>
                    </Stepper>
                </div>
                <div style={contentStyle}>
                    {finished ? (
                        <p>You're all set! We will be in touch
                            <Link to="/">
                                 Click Here</Link>
                        </p>) : (

                            <div>
                                <div>{this.getStepContent(stepIndex)}</div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

