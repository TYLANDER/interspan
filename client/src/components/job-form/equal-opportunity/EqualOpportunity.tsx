import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import './EqualOpportunity.css';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
class EqualOpportunity extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
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
    componentWillMount() {
        if (localStorage.getItem('equal-form') !== null) {
            let data: any = localStorage.getItem('equal-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })

            console.log(data);
        }
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext("equal-form", this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
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
                <label className="title">Equal Opportunity Information (Voluntary, responses not required)</label>
                <p className="paragraph">
                    {content}
                </p><br /><br />
                <label className="title">{gender}</label>
                <RadioButtonGroup name="gender" valueSelected={formRef.gender} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="male"
                        label={male}
                    />
                    <RadioButton
                        value="female"
                        label={female}
                    />
                </RadioButtonGroup>    <br /><br />

                <label className="title">{raceEthnicity}</label>
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

                {this.state.other || formRef.race !== "asian" && formRef.race !== "black" && formRef.race !== "hispanic" && formRef.race !== "native american" && formRef.race !== "white" ?
                    <TextField
                        floatingLabelText={other}
                        name="race"
                        onChange={(event: any) => {
                            formRef.race= event.target.value
                            this.setState(formRef);
                        }
                        }
                        value={formRef.race}
                        onBlur={this.handleTargetEvents}
                    /> : null
                } <br /><br />

                <label className="title">{veteranStatus} </label>
                <RadioButtonGroup name="veteran" defaultSelected={formRef.veteran} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
        );
    }
}

export default EqualOpportunity;