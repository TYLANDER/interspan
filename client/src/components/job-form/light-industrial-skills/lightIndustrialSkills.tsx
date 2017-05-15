import * as React from "react";
import "./lightIndustrialSkills.css"
import ActiveButtons from "../active-buttons/ActiveButtons";
import { RadioButtonGroup, RadioButton, TextField } from "material-ui";

class lightIndustrialSkills extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            forklift : false,
            palletJack : false
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
                <label>LIGHT INDUSTRIAL  WAREHOUSE POSITIONS</label>
                <p>How many years experience in industrial  warehouse positions?</p>
                <RadioButtonGroup name="experience" >
                    <RadioButton
                        value="No experience"
                        label="No experience"
                    />
                    <RadioButton
                        value="Less than 1 year"
                        label="Less than 1 year"
                    />
                    <RadioButton
                        value="1 to 5 years"
                        label="1 to 5 years"
                    />
                    <RadioButton
                        value="6 to 10 years"
                        label="6 to 10 years"
                    />
                    <RadioButton
                        value="10 years or moreNo"
                        label="10 years or more"
                    />
                </RadioButtonGroup>

                <p>Do you have experience with:</p>
                <RadioButtonGroup name="experience " >
                    <RadioButton
                        value="Assembly"
                        label="Assembly"
                    />
                    <RadioButton
                        value="Production Line"
                        label="Production Line"
                    />
                    <RadioButton
                        value="Packing materials"
                        label="Packing materials"
                    />
                    <RadioButton
                        value="Loading/Heavy Lifter"
                        label="Loading/Heavy Lifter"
                    />
                    <RadioButton
                        value="Banding machine"
                        label="Banding machine"
                    />
                    <RadioButton
                        value="Pulling Orders"
                        label="Pulling Orders"
                    />
                    <RadioButton
                        value="UPS shipping labels"
                        label="UPS shipping labels"
                    />
                    <RadioButton
                        value="Data entry to a personal computer"
                        label="Data entry to a personal computer"
                    />
                    <RadioButton
                        value="Counting materials/inventory"
                        label="Counting materials/inventory"
                    />
                    <RadioButton
                        value="Working from a conveyor belt"
                        label="Working from a conveyor belt"
                    />
                    <RadioButton
                        value="Gluing boxes"
                        label="Gluing boxes"
                    />
                    <RadioButton
                        value="Stacker"
                        label="Stacker"
                    />
                    <RadioButton
                        value="Quality Control"
                        label="Quality Control"
                    />
                    <RadioButton
                        value="Weighing materials"
                        label="Weighing materials"
                    />
                    <RadioButton
                        value="None of the above"
                        label="None of the above"
                    />

                </RadioButtonGroup>
                <p>How many pounds are you capable of lifting repeatedly?</p>
                <RadioButtonGroup name="capable" >
                    <RadioButton
                        value="Less than 10 lbs."
                        label="Less than 10 lbs."
                    />
                    <RadioButton
                        value="Up to 10 lbs."
                        label="Up to 10 lbs."
                    />
                    <RadioButton
                        value="Up to 20 lbs"
                        label="Up to 20 lbs"
                    />
                    <RadioButton
                        value="Up to 60 lbs"
                        label="Up to 60 lbs"
                    />
                    <RadioButton
                        value="61 lbs or more"
                        label="61 lbs or more"
                    />
                </RadioButtonGroup>
            
                <br/>
                <label className="inline-fields">Can you lift 50 lbs. 4 to 6 times during a shift?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Can you stand for an 8 hour or a 12 hour shift?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Can you work a job with a lot of walking?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Can you stand, bend, reach for an 8 or 12 hour shift?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Are you able to use basic math skills? (counting, addition, subtraction)</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Can you read measurements with a tape measure or ruler?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Can you use a calculator?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">Can you use a personal computer?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">Have you operated a forklift?</label>
                <RadioButtonGroup name="capable" className="right"  onChange={(event: any) => event.target.value === 'No' ? this.setState({ forklift: false }) : this.setState({ forklift: true })}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>

                {this.state.forklift ? 
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Enter years of experience "
                />
                 : null}
                <br /><br />

                <label className="inline-fields">Have you been certified as a forklift operator?</label>
                <RadioButtonGroup name="capable" className="right">
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>        
                <br /><br />

                <label className="inline-fields">Have you operated a pallet jack?</label>
                <RadioButtonGroup name="capable" className="right"  onChange={(event: any) => event.target.value === 'No' ? this.setState({ palletJack: false }) : this.setState({ palletJack: true })}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>

                {this.state.palletJack ? 
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Enter years of experience "
                />
                 : null}
                <br /><br />

                <label className="inline-fields">Do you have steel toe safety shoes readily available to wear on certain jobsites?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label="Yes"
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                <br /><br />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default lightIndustrialSkills;