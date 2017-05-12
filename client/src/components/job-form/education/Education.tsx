import * as React from "react";
import {RadioButton,RadioButtonGroup} from 'material-ui';

class Education extends React.Component<any, any>{

    render(){

        return(
            <div className="job-applicant-container">
                <label>What is the highest level of education you have completed?</label>
                 <RadioButtonGroup name="education">
                    <RadioButton
                        value="Elementary"
                        label="Elementary"
                    />
                    <RadioButton
                        value="Clerical / Office"
                        label="Clerical / Office"
                    />
                    <RadioButton
                        value="Industrial / Factory / Warehouse"
                        label="Industrial / Factory / Warehouse"
                    />
                     <RadioButton
                        value="other"
                        label="Other"
                    />
                </RadioButtonGroup>
                    
            </div>
        )
    }
}

export default Education;