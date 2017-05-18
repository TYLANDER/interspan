import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import './Transportation.css';
import { RadioButton, RadioButtonGroup, TextField } from 'material-ui';

class Transportation extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            employee: false,
            selectedJson:this.props.jsonData
        };
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const {accessReliableTransportation, employmentBusLine, rideWithAnotherEmployment, name, yes, no} = this.state.selectedJson;
        return (
            <div className="transportation-container">
                <label> Transportation </label> <br /><br />
                <p className="inline-fields">{accessReliableTransportation}</p>
                <RadioButtonGroup name="reliable-tranportation" className="right" >
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
                <p className="inline-fields">{employmentBusLine}</p>
                <RadioButtonGroup name="reliable-tranportation" className="right">
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
                <p className="inline-fields">{rideWithAnotherEmployment}</p>
                <RadioButtonGroup name="another-employee" className="right" onChange={(event: any) => { event.target.value === 'Yes' ? this.setState({ employee: true }) : this.setState({ employee: false }); }}>
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
                    /> :
                    null
                }
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div >
        );
    }
}

export default Transportation;