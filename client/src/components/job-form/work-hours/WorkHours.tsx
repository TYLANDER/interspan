import * as React from "react"
import "./WorkHours.css"
import { RadioButton, RadioButtonGroup ,TextField} from "material-ui"
import ActiveButtons from "../active-buttons/ActiveButtons";

class WorkHours extends React.Component<any, any>{
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }
    render() {

        return (
            <div className="work-hours-container">
                <label> PREFERRED WORK HOURS </label><br /><br />
                <p className="inline-fields">Are you available for full-time work (apart from absence for religious observance)?</p>
                <RadioButtonGroup name="full time work" className="right" >
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
                <br /><br />
                <label className="inline-fields">Can you work the following shift schedules?</label><br /><br />
                <ul>
                    <li>
                        <p className="inline-fields">Any available shift</p>
                        <RadioButtonGroup name="availability" className="right" >
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
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">Days:	8 hour shift, 7:00am to 4:00pm</p>
                        <RadioButtonGroup name="morning" className="right" >
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
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">Evenings:	8 hour shift, 3:30 or 4:00pm to 12:00 midnight</p>
                        <RadioButtonGroup name="evening" className="right" >
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
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">Nights (3rd Shift):  8 hour shift, 11:00pm to 7:30am</p>
                        <RadioButtonGroup name="night" className="right" >
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
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">Days:	12 hour shift, 6:00am to 6:00pm</p>
                        <RadioButtonGroup name="early" className="right" >
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
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">Nights:	12 hour shift, 6:00pm to 6:00am</p>
                        <RadioButtonGroup name="early-night" className="right" >
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
                        <br /><br />
                    </li>
                </ul>
                <p className="inline-fields">Are you willing to work overtime if asked?</p>
                <RadioButtonGroup name="overtime" className="right" >
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
                <br /><br />
                <p className="inline-fields">Are you willing to work a Saturday shift?	or a Sunday shift?</p>
                <RadioButtonGroup name="saturday-shift" className="right" >
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
                <br /><br />
                <TextField 
                    fullWidth={true}
                    floatingLabelText="Please list any specific hours or weekdays that you know you are unavailable for work."
                />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />

            </div>
        )
    }
}

export default WorkHours;