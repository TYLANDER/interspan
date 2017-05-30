import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import './EqualOpportunity.css';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
class EqualOpportunity extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            other: false,
            selectedJson:this.props.jsonData,
            form:{
                gender: "male",
                race: "",
                veteran: ""
            }
        };
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext(this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    handleTargetEvents = (event: any) =>{
        let formRef= this.state.form;
        formRef[event.target.name]= event.target.value;
         this.setState(formRef);
    }
    render() {
        const { content, gender, male, female, raceEthnicity, veteranstatus, asian, black, hispanic, 
            nativeAmerican, white, other, veteran, vietname, disableVeteran } = this.state.selectedJson;
        return (
            <div className="equal-opprtunity-container">
                <label>Equal Opportunity Information (Voluntary, responses not required)</label>
                <p className="paragraph">
                    {content}
                </p><br /><br />
                <p>{gender}</p>
                <RadioButtonGroup name="gender" onChange={(event: any) => {this.handleTargetEvents(event)}}>
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
                <RadioButtonGroup name="race" onChange={(event: any) => {  this.handleTargetEvents(event); (event.target.value === 'other' ? this.setState({ other: true }) : 
                                                                        this.setState({ other: false })) }}>
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
                        name="race"
                        onBlur={this.handleTargetEvents}
                    /> : null
                } <br /><br />

                <p>{veteranstatus} </p>
                <RadioButtonGroup name="veteran" onChange={(event: any) => {this.handleTargetEvents(event)}}>
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