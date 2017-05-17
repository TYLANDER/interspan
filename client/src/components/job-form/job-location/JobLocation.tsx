import * as React from 'react';
import {RadioButtonGroup, RadioButton, TextField} from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class JobLocation extends React.Component<any, any>{

    jsonData: any;

    constructor(props: any){
        super(props);
        this.jsonData = this.props.jsonData;
        this.state = {
            position: false,
            location: false
        };
        console.log(this.jsonData);
    }
    handleNext = () => {
        this.props.handleNext({name: 123, idx : 0});
    }
    handlePrev = () => {
        this.props.handlePrev({name: 123, idx : 1});
    }
    render(){
        const {positionDesired, avalaiblePosition, clericalOffice, industrialFactory, other, locationPreference, anyAvailableSite, site, payRateExpected, perHour} = this.jsonData;
        return(
            <div className="job-applicant-container">
                 <label className="title">Job / Location </label>
                 <br />
                 <br />
                 <p>{positionDesired} </p>
                <RadioButtonGroup name="position" onChange={(event: any) => event.target.value === 'other' ? this.setState({position: true }) : this.setState({position: false })}>

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
                {this.state.position ? <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={other}
                /> : ''}
                 <p>{locationPreference} </p>
                <RadioButtonGroup name="location" onChange={(event: any) => event.target.value === 'site' ? this.setState({location: true }) : this.setState({location: false })}>

                    <RadioButton
                        value="Any available site"
                        label={anyAvailableSite}
                    />
                     <RadioButton
                        value="site"
                        label={site}
                    />
                </RadioButtonGroup>
                {this.state.location ? <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={site}
                /> : ''}
                <TextField
                    hintText={perHour}
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={payRateExpected}
                />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()}/>
            </div>
        );
    }
}

export default JobLocation;