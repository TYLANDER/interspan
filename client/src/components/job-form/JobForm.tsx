import * as React from 'react';
import './JobForm.css';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
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
            selectedJson: this.jobDataEn
        };
    }

    handleNext = (e: any) => {
        console.log(e);
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 12,
        });
    }

    handlePrev = (e: any) => {
        console.log(e);
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
                return <Certification handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.certification} />;
            case 4:
                return <EmployementHistory handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.employmentHistory} />;
            case 5:
                return <PersonalInfo handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.personalInformation} />;
            case 6:
                return <LightIndustrialSkill handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.lightIndustrialAndWarehousePositions} />;
            case 7:
                return <Media handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.media} />;
            case 8:
                return <EqualOpportunity handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.equalOpportunity} />;
            case 9:
                return <WorkHour handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.WorkHours} />;
            case 10:
                return <Communication handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.communication} />;
            case 11:
                return <Transportation handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.transportation} />;
            case 12:
                return <References handleNext={(e: any) => this.handleNext(e)} handlePrev={(e: any) => this.handlePrev(e)} jsonData={this.state.selectedJson.references} />;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    componentWillReceiveProps(nextProp: any) {
        console.log(nextProp.language);
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
                    <Stepper activeStep={stepIndex} style={{ 'flexWrap': 'wrap' }} >
                    
                        <Step>
                            <StepLabel>{headings.applicationInformation}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.jobLocation}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.educationTraining}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.certification}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.employementHistory}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.personalInformation}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.lightIndustrialSkills}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.media}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.equalOpportunity}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.workHours}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.communication}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.transportation}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>{headings.references}</StepLabel>
                        </Step>
                    
                    </Stepper>
                </div>

                <div className="sm-stepper">
                    <Stepper activeStep={stepIndex} style={{ 'flexWrap': 'wrap' }}  >
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        <Step><StepLabel></StepLabel></Step>
                        
                    </Stepper>
                </div>
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
        );
    }
}

