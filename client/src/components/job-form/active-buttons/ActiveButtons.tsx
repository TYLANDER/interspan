import * as React from "react"
import {RaisedButton,
    FlatButton} from "material-ui";
class ActiveButtons extends React.Component<any, any>{

    stepIndex = 0;
    
    handleNext = () => {
     this.props.handleNext()
    };

    handlePrev = () => {
        this.props.handlePrev()
    };
    render(){

        return(
            <div className="job-applicant-container">
                <FlatButton
                    label="Back"
                    onTouchTap={()=>this.handlePrev()}
                    disabled={this.stepIndex === -1}
                    style={{ marginRight: 12 }}
                />
                <RaisedButton
                    label={this.stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={()=>this.handleNext()}
                />
            </div>
        )
    }
}

export default ActiveButtons;