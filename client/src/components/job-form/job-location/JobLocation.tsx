import * as React from 'react';
import {RadioButtonGroup, RadioButton, TextField} from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class JobLocation extends React.Component<any, any>{

    constructor(props: any){
        super(props);
        this.state = {
            position: false,
            location: false,
            selectedJson:this.props.jsonData,
            form:{
                position_desired: "",
                location_preference: "", 
                pay_rate:""
            }
        };
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleTargetEvents = (event: any) =>{
        let formRef= this.state.form;
        formRef[event.target.name]= event.target.value;
         this.setState(formRef);
    }
    handleNext = () => {
        this.props.handleNext(this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({name: 123, idx : 1});
    }
    render(){
        const {positionDesired, avalaiblePosition, clericalOffice, industrialFactory, other, locationPreference, anyAvailableSite, site, payRateExpected, perHour} = this.state.selectedJson;
        return(
            <div className="job-applicant-container">
                 <label className="title">{positionDesired} </label>
                <RadioButtonGroup name="position_desired" onChange={(event: any) => {
                    this.handleTargetEvents(event);
                    event.target.value === 'other' ? this.setState({position: true }) : this.setState({position: false })}}>

                    <RadioButton
                        value="Any available position"
                        label={avalaiblePosition}
                    />
                    <RadioButton
                        value="Clerical / Office"
                        label={clericalOffice}
                    />
                    <RadioButton
                        value="Industrial / Factory / Warehouse"
                        label={industrialFactory}
                    />
                     <RadioButton
                        value="other"
                        label={other}
                    />
                </RadioButtonGroup>
                {this.state.position ? 
                <TextField
                    name="location_preference"
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={other}
                    onBlur={this.handleTargetEvents}
                /> : ''}
                 <label className="title">{locationPreference} </label>
                <RadioButtonGroup name="location_preference" onChange={(event: any) => {
                    this.handleTargetEvents(event);
                    event.target.value === 'site' ? this.setState({location: true }) : this.setState({location: false })}}>

                    <RadioButton
                        value="Any available site"
                        label={anyAvailableSite}
                    />
                     <RadioButton
                        value="site"
                        label={site}
                    />
                </RadioButtonGroup>
                {this.state.location ? 
                <TextField
                    name="location_preference"
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={site}
                    onBlur={this.handleTargetEvents}
                /> : ''}
                <TextField
                    name="pay_rate"
                    hintText={perHour}
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={payRateExpected}
                    onBlur={this.handleTargetEvents}
                />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()}/>
            </div>
        );
    }
}

export default JobLocation;