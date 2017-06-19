import * as React from 'react';
import { RaisedButton, FlatButton } from 'material-ui';
import "./ActiveButtons.css"

class ActiveButtons extends React.Component<any, any>{
    stepIndex = 0;

    //Handling next state of stepper
    handleNext = () => {
        this.props.handleNext();
    }

    //Handling previous state of stepper
    handlePrev = () => {
        this.props.handlePrev();
    }
    render() {
        return (
            <div className="job-applicant-container">
                <FlatButton
                    label="Back"
                    onTouchTap={() => this.handlePrev()}
                    disabled={this.stepIndex === -1}
                    style={{ marginRight: 12 }}
                />
                <RaisedButton
                    label={this.props.finished ? 'I Agree' : 'Next'}
                    primary={true}
                    disabled={this.props.disabled}
                    onTouchTap={() => this.handleNext()}
                />
            </div>
        );
    }
}

export default ActiveButtons;