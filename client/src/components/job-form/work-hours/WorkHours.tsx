import * as React from 'react';
import './WorkHours.css';
import { RadioButton, RadioButtonGroup, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class WorkHours extends React.Component<any, any>{
    jsonData: any;
    constructor(props: any) {
        super(props);
        this.jsonData = this.props.jsonData;
        this.state = {
            other: false
        };
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const { title, questions, yes, no } = this.jsonData;
        return (
            <div className="work-hours-container">
                <label>{title}</label><br /><br />
                <p className="inline-fields">{questions.one}</p>
                <RadioButtonGroup name="full time work" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.three}</label><br /><br />
                <ul>
                    <li>
                        <p className="inline-fields">{questions.four}</p>
                        <RadioButtonGroup name="availability" className="right" >
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.five}</p>
                        <RadioButtonGroup name="morning" className="right" >
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.six}</p>
                        <RadioButtonGroup name="evening" className="right" >
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.seven}</p>
                        <RadioButtonGroup name="night" className="right" >
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.eight}</p>
                        <RadioButtonGroup name="early" className="right" >
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.nine}</p>
                        <RadioButtonGroup name="early-night" className="right" >
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                </ul>
                <p className="inline-fields">{questions.ten}</p>
                <RadioButtonGroup name="overtime" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <p className="inline-fields">{questions.eleven}</p>
                <RadioButtonGroup name="saturday-shift" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <TextField
                    fullWidth={true}
                    floatingLabelText={questions.twelve}
                />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />

            </div>
        );
    }
}

export default WorkHours;