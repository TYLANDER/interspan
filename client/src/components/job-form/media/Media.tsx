import * as React from "react";
import ActiveButtons from "../active-buttons/ActiveButtons";
import { RadioButtonGroup, RadioButton, TextField } from "material-ui";

class Media extends React.Component<any, any>{
    constructor() {
        super();
       this.state = {
        position : false,
        interspan:false,
        friend:false
    }
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }
    render() {

        return (
            <div className="job-applicant-container">
                <label>Media</label>
                <p>How did you hear about InterSpan, Inc.?</p>
                <RadioButtonGroup name="experience" 
                onChange={(event: any) => {
                    if(event.target.value === "Referred from job site")
                    {
                        this.setState({position: true,interspan:false,friend:false })
                    }
                    else if(event.target.value === "Referred by InterSpan, Inc. employee")
                    {
                        this.setState({interspan:true,position:false,friend:false})
                    }
                    else if(event.target.value === "Referred by friend")
                    {
                        this.setState({friend:true,interspan:false,position:false})
                    }
                    else
                    {
                        this.setState({position:false,interspan:false,friend:false})
                    }
                    }}>
                    <RadioButton
                        value="Radio Station"
                        label="Radio Station"
                    />
                    <RadioButton
                        value="Richmond Times Newspaper"
                        label="Richmond Times Newspaper"
                    />
                    <RadioButton
                        value="Job search on Internet"
                        label="Job search on Internet"
                    />

                    <RadioButton
                        value="Referred from job site"
                        label="Referred from job site"
                    />
                     <RadioButton
                        value="Referred by InterSpan, Inc. employee"
                        label="Referred by InterSpan, Inc. employee"
                    />
                     <RadioButton
                        value="Referred by friend"
                        label="Referred by friend"
                    />

                </RadioButtonGroup>
                 {this.state.position?
                 <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Site"
                />:null}
                 {this.state.interspan?
                 <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Name"
                />:null}
                {this.state.friend?
                 <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Friend"
                />:null}
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default Media;