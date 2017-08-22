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

    //selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        this.props.handleNext("equal-form", this.state.form);
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
                </p><br /><br />
                <p className="title">{gender}</p>
                <RadioButtonGroup name="gender" valueSelected={formRef.gender} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="male"
                        label={male}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="female"
                        label={female}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup> <br /><br />
                <p className="title">{raceEthnicity}</p>
                <RadioButtonGroup name="race" defaultSelected={
                    formRef.race !== "asian" && formRef.race !== "black" && formRef.race !== "hispanic" && formRef.race !== "native american" && formRef.race !== "white" ?
                        "other" : formRef.race
                }
                    onChange={(event: any) => {
                        this.handleTargetEvents(event);
                        (event.target.value === 'other' ? this.setState({ other: true }) :
                            this.setState({ other: false }))
                    }}>
                    <RadioButton
                        value="asian"
                        label={asian}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="black"
                        label={black}
                        iconStyle={Styling.iconStyle}
                    />

                    <RadioButton
                        value="hispanic"
                        label={hispanic}
                                                iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="native american"
                        label={nativeAmerican}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="white"
                        iconStyle={Styling.iconStyle}
                        label={white}
                    />
                    <RadioButton
                        value="other"
                        iconStyle={Styling.iconStyle}
                        label={other}
                    />
                </RadioButtonGroup>
                {this.state.other || formRef.race !== "asian" && formRef.race !== "black" && formRef.race !== "hispanic" && formRef.race !== "native american" && formRef.race !== "white" ?
                    <TextField
                        floatingLabelText={other}
                        name="race"
                        className="text-area"
                        onChange={(event: any) => {
                            formRef.race = event.target.value
                            this.setState(formRef);
                        }
                        }
                        value={formRef.race}
                        onBlur={this.handleTargetEvents}
                    /> : null
                } <br /><br />
                <p className="title">{veteranStatus} </p>
                <RadioButtonGroup name="veteran" defaultSelected={formRef.veteran} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="veteran"
                        label={veteran}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Vietnam Era Veteran"
                        label={vietname}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Disabled Veteran"
                        label={disableVeteran}
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