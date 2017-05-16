import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons"
import "./EqualOpportunity.css"
import { RadioButtonGroup, RadioButton, TextField } from "material-ui"
class EqualOpportunity extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            other: false
        }
    }

    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }

    render() {

        return (
            <div className="equal-opprtunity-container">
                <label>Equal Opportunity Information (Voluntary, responses not required)</label>
                <p className="paragraph">
                    InterSpan, Inc. is an EQUAL OPPORTUNITY EMPLOYER. To successfully implement this program and comply with government record keeping requirements,
                    the Company requests that you provide the following information, which will not be used in evaluating your application for employment, or in the case of incumbent
                    employees, your performance evaluation. Completion of this section is voluntary and will be kept confidential. If you choose not to provide this information,
                    your decision will not affect your application.
                </p><br /><br />
                <p>Gender </p>
                <RadioButtonGroup name="gender">
                    <RadioButton
                        value="male"
                        label="Male"
                    />
                    <RadioButton
                        value="female"
                        label="Female"
                    />
                </RadioButtonGroup>    <br /><br />

                <p>Race / Ethnicity Data </p>
                <RadioButtonGroup name="race" onChange={(event: any) => { event.target.value === "other" ? this.setState({ other: true }) : this.setState({ other: false }) }}>
                    <RadioButton
                        value="asian"
                        label="Asian"
                    />
                    <RadioButton
                        value="black"
                        label="Black"
                    />

                    <RadioButton
                        value="hispanic"
                        label="Hispanic"
                    />
                    <RadioButton
                        value="native american"
                        label="Native American"
                    />
                    <RadioButton
                        value="white"
                        label="White (Caucasian)"
                    />
                    <RadioButton
                        value="other"
                        label="Other"
                    />
                </RadioButtonGroup>

                {this.state.other ?
                    <TextField
                        floatingLabelText="Other"
                    /> : null
                } <br /><br />

                <p>VETERAN STATUS </p>
                <RadioButtonGroup name="veteran">
                    <RadioButton
                        value="veteran"
                        label="Veteran"
                    />
                    <RadioButton
                        value="Vietnam Era Veteran"
                        label="Vietnam Era Veteran"
                    />
                    <RadioButton
                        value="Disabled Veteran"
                        label="Disabled Veteran"
                    />
                </RadioButtonGroup>

                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default EqualOpportunity;