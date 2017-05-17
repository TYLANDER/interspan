import * as React from "react";
import "./JobForm.css";
import {Step, Stepper, StepLabel } from 'material-ui/Stepper';
import ApplicantInfo from "./applicant-info/ApplicantInfo"
import JobLocation from "./job-location/JobLocation";
import Education from "./education/Education";
import Certification from "./certification/Certification";
import EmployementHistory from "./employment-history/EmploymentHistory";
import PersonalInfo from "./personal-info/PersonalInfo";
import LightIndustrialSkill from "./light-industrial-skills/lightIndustrialSkills";
import Media from "./media/Media";
import EqualOpportunity from "./equal-opportunity/EqualOpportunity";
import WorkHour from "./work-hours/WorkHours";
import Communication from "./communication/Communication";
import Transportation from "./transportation/Transportation";
import References from "./references/References";

class MainJobForm extends React.Component<any, any>{

    jobDataEn:any = {};

    constructor(){
        super();
        this.jobDataEn =  require("../../assets/json/job-en");
        this.state = {
            finished: false,
            stepIndex: 12,
        };
    }
    
    handleNext = (e:any) => {
        console.log(e);
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 12,
        });
    };

    handlePrev = (e:any) => {
        console.log(e);
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    getStepContent(stepIndex: any) {
        switch (stepIndex) {
            case 0:
                return <ApplicantInfo  handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.applicationInformation}/>;
            case 1:
                return <JobLocation handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.jobLocation}/>;
            case 2:
                return <Education handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.educationTraining}/>;
            case 3:
                return <Certification handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.certification}/>;
            case 4:
                return <EmployementHistory handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.employmentHistory}/>;
            case 5:
                return <PersonalInfo handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.personalInformation}/>;
            case 6:
                return <LightIndustrialSkill handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.lightIndustrialAndWarehousePositions}/>;
            case 7:
                return <Media handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.media}/>;
            case 8:
                return <EqualOpportunity handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.equalOpportunity}/>;
            case 9:
                return <WorkHour handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.WorkHours}/>;
            case 10:
                return <Communication handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.communication}/>;
            case 11:
                return <Transportation handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.transportation}/>;
            case 12:
                return <References handleNext={(e:any)=>this.handleNext(e)} handlePrev={(e:any)=>this.handlePrev(e)} jsonData={this.jobDataEn.references}/>;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };
        return (
            <div className="main-job-form-container">
                <Stepper activeStep={stepIndex} style={{"flexWrap": "wrap"}} >
                    <Step>
                        <StepLabel>Applicant Information</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Job / Location</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Education / Training</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Certification</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Employment History</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Personal Information</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Light Industrial Skills</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Media</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Equal Opportunity</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Work Hours</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Communication</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Transportation</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>References</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a href="#"
                               onClick={(event) => {
                                   event.preventDefault();
                                   this.setState({ stepIndex: 0, finished: false });
                               }}>
                                Click here</a> to reset the example.
                        </p>) : (

                                    <div>
                                        <div>{this.getStepContent(stepIndex)}</div>
                                    </div>
                                    )}
                             </div>
                        </div>
        )
    }
}

export default MainJobForm;