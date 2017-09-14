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
            <div className="button-container">
                <FlatButton
                    icon={<img className="arrow-button" src={require("../../../assets/arrow.svg")}  />}
                    onTouchTap={() => this.handlePrev()}
                    disabled={this.stepIndex === -1}
                    className="first-button hovered-class"
                    style={{ marginRight: 12, border: "2px solid #f2f2f2", borderRadius: "6px", height: "44px", lineHeight: "41px" }}
                />
                <FlatButton
                    label={this.props.finished ? <b>I Agree</b> : <b>Next</b>}
                    disabled={this.props.disabled}
                    className="second-button hovered-class"
                    labelStyle={{ textTransform: "none", fontSize: "15px" }}
                    style={{ width: "300px", height: "41px", fontFamily: "Calibri", borderRadius: "8px", lineHeight: "41px", background: "linear-gradient(to right,#3e7fff,#6bb0ff)", color: "white" }}
                    onTouchTap={() => this.handleNext()}
                />
            </div>
        );
    }
}

export default ActiveButtons;