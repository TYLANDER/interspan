import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons"
import { RadioButton, RadioButtonGroup } from "material-ui"

class Communication extends React.Component<any, any>{
    constructor() {
        super();
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }
    render() {

        return (
            <div className="job-applicant-container">
                <label>Language </label>
                <p>Are you fluent in any langouage other than English?</p>
                <RadioButtonGroup name="fluent">
                    <RadioButton
                        value="yes"
                        label="Yes"
                    />
                    <RadioButton
                        value="no"
                        label="No"
                    />
                </RadioButtonGroup>
                <p>Level of communication: (non-English speakers only)</p>
                <RadioButtonGroup name="language">
                    <RadioButton
                        value="Understand/Speak no English"
                        label="Understand/Speak no English"
                    />
                    <RadioButton
                        value="Understand a few English instructions"
                        label="Understand a few English instructions"
                    />
                    <RadioButton
                        value="Understand most English instructions"
                        label="Understand most English instructions"
                    />
                    <RadioButton
                        value="Learning English as ESL"
                        label="Learning English as ESL"
                    />
                    <RadioButton
                        value="Bilingual English/Spanish"
                        label="Bilingual English/Spanish"
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default Communication;