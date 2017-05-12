import * as React from "react";
import "./JobForm.css"
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import {RaisedButton,
    FlatButton} from "material-ui";
import ApplicantInfo from "./applicant-info/ApplicantInfo"
import JobLocation from "./job-location/JobLocation";
import Education from "./education/Education";


class MainJobForm extends React.Component<any, any>{
    state = {
        finished: false,
        stepIndex: 2,
    };

   
    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    getStepContent(stepIndex: any) {
        switch (stepIndex) {
            case 0:
                return <ApplicantInfo />;
            case 1:
                return <JobLocation />;
            case 2:
                return <Education />;
            case 3:
                return <JobLocation />;
            case 4:
                return <Education />;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };
        return (
            <div className="main-job-form-container">
                <Stepper activeStep={stepIndex} >
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
                                        <div style={{ marginTop: 12 }}>
                                            <FlatButton
                                                label="Back"
                                                disabled={stepIndex === 0}
                                                onTouchTap={this.handlePrev}
                                                style={{ marginRight: 12 }}
                                            />
                                            <RaisedButton
                                                label={stepIndex === 2 ? 'Finish' : 'Next'}
                                                primary={true}
                                                onTouchTap={this.handleNext}
                                            />
                                        </div>
                                    </div>
                                    )}
                             </div>
                        </div>
        )
    }
}

export default MainJobForm;