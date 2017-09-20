import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import './EqualOpportunity.css';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
import Styling from "../jobTheme";

class EqualOpportunity extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            other: false,
            selectedJson: this.props.jsonData,
            form: {
                gender: "male",
                race: "",
                veteran: ""
            },
            error: {
                veteran: {
                    veteranError: false, msg: ""
                },
                race: {
                    raceError: false, msg: ""
                }
            }
        };
    }

    //getting equal opportunity form data from local storage
    componentWillMount() {
        if (localStorage.getItem('equal-form') !== null) {
            let data: any = localStorage.getItem('equal-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }

    setError = (event: any) => {
        let current = this.state.error[event];
        current[event + "Error"] = true;
        current["msg"] = event + " field is required";
        this.setState(current)
    }

    validationCheck = (event: any, name: any) => {
        if (event.target.value === "") {
            let currentState = this.state.error[name];
            currentState[name + "Error"] = true;
            currentState["msg"] = name + " field is required";
            this.setState(currentState);
        }
        else {
            let currentState = this.state.error[name];
            currentState[name + "Error"] = false;
            currentState["msg"] = name + "";
            this.setState(currentState);

        }
    }
    //selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        if (this.state.form.veteran && this.state.form.race) {
            this.props.handleNext("equal-form", this.state.form);
        }
        else {
            if (!this.state.form.veteran) {
                this.setError('veteran');
            }
            if (!this.state.form.race) {
                this.setError('race');
            }
        }
    }

    //handling previous state
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }

    //handling input form state of the component
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }

    render() {
        const { content, gender, male, female, raceEthnicity, veteranStatus, asian, black, hispanic,
            nativeAmerican, white, other, veteran, vietname, disableVeteran } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="equal-opprtunity-container">
                <p className="title">Equal Opportunity Information (Voluntary, responses not required)</p>
                <p className="paragraph">
                    {content}
                </p><br />
                <p className="title">{gender}</p>
                <RadioButtonGroup name="gender" valueSelected={formRef.gender} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="male"
                        label={male}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="female"
                        label={female}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup> <br />
                <p style={this.state.error.race.raceError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{raceEthnicity}</p>
                <RadioButtonGroup name="race" defaultSelected={
                    formRef.race !== "asian" && formRef.race !== "black" && formRef.race !== "hispanic" && formRef.race !== "native american" && formRef.race !== "white" ?
                        "other" : formRef.race
                }
                    onChange={(event: any) => {
                        this.validationCheck(event, 'race');
                        this.handleTargetEvents(event);
                        (event.target.value === 'other' ? this.setState({ other: true }) :
                            this.setState({ other: false }))
                    }}>
                    <RadioButton
                        value="asian"
                        label={asian}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="black"
                        label={black}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />

                    <RadioButton
                        value="hispanic"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={hispanic}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="native american"
                        label={nativeAmerican}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="white"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        label={white}
                    />
                    <RadioButton
                        value="other"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        label={other}
                    />
                </RadioButtonGroup>
                {this.state.other || formRef.race !== "asian" && formRef.race !== "black" && formRef.race !== "hispanic" && formRef.race !== "native american" && formRef.race !== "white" ?
                    <div>
                        <TextField
                            floatingLabelText={other}
                            name="race"
                            errorStyle={Styling.errorMsg}
                            errorText={this.state.error.race.raceError ? this.state.error.race.msg : null}
                            className="text-area"
                            onChange={(event: any) => {
                                this.validationCheck(event, 'race')
                                formRef.race = event.target.value
                                this.setState(formRef);
                            }
                            }
                            value={formRef.race}
                            onBlur={(event: any) => { this.validationCheck(event, 'race'); this.handleTargetEvents }}
                        /> {this.state.error.race.raceError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    </div> : null
                } <br />
                <p style={this.state.error.veteran.veteranError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{veteranStatus} </p>
                <RadioButtonGroup name="veteran" defaultSelected={formRef.veteran} onChange={(event: any) => { this.validationCheck(event, 'veteran'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="veteran"
                        label={veteran}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Vietnam Era Veteran"
                        label={vietname}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Disabled Veteran"
                        label={disableVeteran}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}
export default EqualOpportunity;