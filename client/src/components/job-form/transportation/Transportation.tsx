import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import './Transportation.css';
import { RadioButton, RadioButtonGroup, TextField } from 'material-ui';

class Transportation extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            employee: false,
            selectedJson:this.props.jsonData,
            form:{
                reliable_transportation: "",
                employment_bus: "",
                another_employee: ""
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
        const {accessReliableTransportation, employmentBusLine, rideWithAnotherEmployment, name, yes, no} = this.state.selectedJson;
        return (
            <div className="transportation-container">
                <br/>
                <label className="inline-fields">{accessReliableTransportation}</label>
                <RadioButtonGroup name="reliable_transportation" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
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
                <br /> <br />
                <label className="inline-fields">{employmentBusLine}</label>
                <RadioButtonGroup name="employment_bus" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
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
                <br /> <br />
                <label className="inline-fields">{rideWithAnotherEmployment}</label>
                <RadioButtonGroup name="another_employee" className="right" onChange={(event: any) => { this.handleTargetEvents(event); event.target.value === 'Yes' ? this.setState({ employee: true }) : this.setState({ employee: false }); }}>
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
                <br /> <br />
                {this.state.employee ?
                    <TextField
                        floatingLabelText={name}
                        name="another_employee"
                        onBlur={this.handleTargetEvents}
                    /> :
                    null
                }
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div >
        );
    }
}

export default Transportation;