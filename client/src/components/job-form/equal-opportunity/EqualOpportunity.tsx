import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons"
import "./EqualOpportunity.css"
import { RadioButtonGroup, RadioButton, TextField } from "material-ui"
class EqualOpportunity extends React.Component<any, any>{
    jsonData:any
    constructor(props: any) {
        super(props)
        this.jsonData = this.props.jsonData
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
        const {content,gender,male,female,raceEthnicity,veteranstatus,asian,black,hispanic,nativeAmerican,white,other,veteran,vietname,disableVeteran} = this.jsonData;
        return (
            <div className="equal-opprtunity-container">
                <label>Equal Opportunity Information (Voluntary, responses not required)</label>
                <p className="paragraph">
                    {content}
                </p><br /><br />
                <p>{gender}</p>
                <RadioButtonGroup name="gender">
                    <RadioButton
                        value="male"
                        label={male}
                    />
                    <RadioButton
                        value="female"
                        label={female}
                    />
                </RadioButtonGroup>    <br /><br />

                <p>{raceEthnicity}</p>
                <RadioButtonGroup name="race" onChange={(event: any) => { event.target.value === "other" ? this.setState({ other: true }) : this.setState({ other: false }) }}>
                    <RadioButton
                        value="asian"
                        label={asian}
                    />
                    <RadioButton
                        value="black"
                        label={black}
                    />

                    <RadioButton
                        value="hispanic"
                        label={hispanic}
                    />
                    <RadioButton
                        value="native american"
                        label={nativeAmerican}
                    />
                    <RadioButton
                        value="white"
                        label={white}
                    />
                    <RadioButton
                        value="other"
                        label={other}
                    />
                </RadioButtonGroup>

                {this.state.other ?
                    <TextField
                        floatingLabelText={other}
                    /> : null
                } <br /><br />

                <p>{veteranstatus} </p>
                <RadioButtonGroup name="veteran">
                    <RadioButton
                        value="veteran"
                        label={veteran}
                    />
                    <RadioButton
                        value="Vietnam Era Veteran"
                        label={vietname}
                    />
                    <RadioButton
                        value="Disabled Veteran"
                        label={disableVeteran}
                    />
                </RadioButtonGroup>

                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default EqualOpportunity;