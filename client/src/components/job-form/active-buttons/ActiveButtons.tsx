import * as React from 'react';
import { FlatButton } from 'material-ui';
import "./ActiveButtons.css"
// import ArrowBack from 'material-ui/svg-icons/action/trending-flat';

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
                    icon={<img width="35px" height="15px" src={require("../../../assets/arrow.png")} />}
                    onTouchTap={() => this.handlePrev()}
                    disabled={this.stepIndex === -1}
                    style={{ marginRight: 12, border: "2px solid #f2f2f2", borderRadius: "6px", height: "44px", lineHeight: "41px" }}
                />
                <FlatButton
                    label={this.props.finished ? <b>I Agree</b> : <b>Next</b>}
                    disabled={this.props.disabled}
                    labelStyle={{ textTransform: "none", fontSize: "15px" }}
                    style={{ width: "300px", height: "41px", fontFamily: "SFUI_Text", borderRadius: "8px", lineHeight: "41px", background: "linear-gradient(to right,#3e7fff,#6bb0ff)", color: "white" }}
                    onTouchTap={() => this.handleNext()}
                />
            </div>
        );
    }
}

export default ActiveButtons;