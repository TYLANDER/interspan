import * as React from "react"
import {RadioButtonGroup,RadioButton,TextField} from "material-ui";
import ActiveButtons from "../active-buttons/ActiveButtons"

class JobLocation extends React.Component<any, any>{
    state={
        position:false,
        location:false
    }
    handleNext = ()=>{
        this.props.handleNext({name:123, idx : 0})
    }
    handlePrev = ()=>{
        this.props.handlePrev({name:123, idx : 1})
    }
    render(){
        return(
            <div className="job-applicant-container">
                 <label className="title">Job/Location</label>
                 <br />
                 <br />
                 <p>Position Desired </p>
                <RadioButtonGroup name="position" onChange={(event: any) => event.target.value === 'other' ? this.setState({position: true }) : this.setState({position: false })}>

                    <RadioButton
                        value="Any available position"
                        label="Any available position"
                    />
                    <RadioButton
                        value="Clerical / Office"
                        label="Clerical / Office"
                    />
                    <RadioButton
                        value="Industrial / Factory / Warehouse"
                        label="Industrial / Factory / Warehouse"
                    />
                     <RadioButton
                        value="other"
                        label="Other"
                    />
                </RadioButtonGroup>
                {this.state.position? <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Other? "
                />:""}
                 <p>Location Preference </p>
                <RadioButtonGroup name="location" onChange={(event: any) => event.target.value === 'site' ? this.setState({location: true }) : this.setState({location: false })}>

                    <RadioButton
                        value="Any available site"
                        label="Any available site"
                    />
                     <RadioButton
                        value="site"
                        label="Site"
                    />
                </RadioButtonGroup>
                {this.state.location? <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Site? "
                />:""}
                <TextField
                    hintText="Like 16$ per hour"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Pay Rate Expected"
                />

                <ActiveButtons handleNext={()=>this.handleNext()} handlePrev={()=>this.handlePrev()}/>
            </div>
        )
    }
}

export default JobLocation;