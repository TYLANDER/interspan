import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons";
import "./Transportation.css";
import { RadioButton, RadioButtonGroup, TextField } from "material-ui";

class Transportation extends React.Component<any, any>{
    constructor(props: any) {
        super()
        this.state = {
            employee: false
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
            <div className="transportation-container">
                <label> Transportation </label> <br /><br />
                <p className="inline-fields">Do you have access to reliable transportation?</p>
                <RadioButtonGroup name="reliable-tranportation" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /> <br />
                <p className="inline-fields">Do you need employment on the bus line?</p>
                <RadioButtonGroup name="reliable-tranportation" className="right">
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /> <br />
                <p className="inline-fields">Do you need to ride with another employee?</p>
                <RadioButtonGroup name="another-employee" className="right" onChange={(event: any) => { event.target.value === "Yes" ? this.setState({ employee: true }) : this.setState({ employee: false }) }}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /> <br />
                {this.state.employee ?
                    <TextField
                        floatingLabelText="Name"
                    /> :
                    null
                }
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div >
        )
    }
}

export default Transportation;