import * as React from 'react';
import './lightIndustrialSkills.css';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';

class lightIndustrialSkills extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            forklift: false,
            palletJack: false,
            selectedJson:this.props.jsonData,
            form: {
                industrial_experience: "",
                experience_with: "",
                lifting: "",
                lift_weight: false,
                stand_hours: false,
                walking_job: false,
                stand_bend: false,
                basic_maths: false,
                tape_mesurement: false,
                use_calculator: false,
                use_pc: false,
                operated_forklift: false,
                forklift_experience: false,
                certified_forklift: false,
                operated_pallet_jack: false,
                pallet_jack_experience: false,
                steel_shoes: false
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
        const { questions, yes, no, noExperience, lessThanOneYear, oneToFiveYears, sixToTenYears, tenYearsOrMore, assembly, pullingOrders, productionLine, packingMaterials,
            loadingLifter, bandingMachine, upsShippingLabels, dataEntry, countingMaterial, workingFrom, gluingBoxes, stacker, qualityControl, weighingMaterial, noneOfAbove,
            lessThanTenLbs, upToTenLbs, experience, upToTwentyLbs, upToSixtyLbs, sixtyOneOrMore } = this.state.selectedJson;
        return (
            <div className="job-applicant-container">
                <label>{questions.one}</label>
                <RadioButtonGroup name="industrial_experience" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        value="No experience"
                        label={noExperience}
                    />
                    <RadioButton
                        value="Less than 1 year"
                        label={lessThanOneYear}
                    />
                    <RadioButton
                        value="1 to 5 years"
                        label={oneToFiveYears}
                    />
                    <RadioButton
                        value="6 to 10 years"
                        label={sixToTenYears}
                    />
                    <RadioButton
                        value="10 years or moreNo"
                        label={tenYearsOrMore}
                    />
                </RadioButtonGroup>

                <label>{questions.two}</label>
                <RadioButtonGroup name="experience_with" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        value="Assembly"
                        label={assembly}
                    />
                    <RadioButton
                        value="Production Line"
                        label={productionLine}
                    />
                    <RadioButton
                        value="Packing materials"
                        label={packingMaterials}
                    />
                    <RadioButton
                        value="Loading/Heavy Lifter"
                        label={loadingLifter}
                    />
                    <RadioButton
                        value="Banding machine"
                        label={bandingMachine}
                    />
                    <RadioButton
                        value="Pulling Orders"
                        label={pullingOrders}
                    />
                    <RadioButton
                        value="UPS shipping labels"
                        label={upsShippingLabels}
                    />
                    <RadioButton
                        value="Data entry to a personal computer"
                        label={dataEntry}
                    />
                    <RadioButton
                        value="Counting materials/inventory"
                        label={countingMaterial}
                    />
                    <RadioButton
                        value="Working from a conveyor belt"
                        label={workingFrom}
                    />
                    <RadioButton
                        value="Gluing boxes"
                        label={gluingBoxes}
                    />
                    <RadioButton
                        value="Stacker"
                        label={stacker}
                    />
                    <RadioButton
                        value="Quality Control"
                        label={qualityControl}
                    />
                    <RadioButton
                        value="Weighing materials"
                        label={weighingMaterial}
                    />
                    <RadioButton
                        value="None of the above"
                        label={noneOfAbove}
                    />

                </RadioButtonGroup>
                <label>{questions.three}</label>
                <RadioButtonGroup name="lifting" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        value="Less than 10 lbs."
                        label={lessThanTenLbs}
                    />
                    <RadioButton
                        value="Up to 10 lbs."
                        label={upToTenLbs}
                    />
                    <RadioButton
                        value="Up to 20 lbs"
                        label={upToTwentyLbs}
                    />
                    <RadioButton
                        value="Up to 60 lbs"
                        label={upToSixtyLbs}
                    />
                    <RadioButton
                        value="61 lbs or more"
                        label={sixtyOneOrMore}
                    />
                </RadioButtonGroup>

                <br />
                <label className="inline-fields">{questions.four}</label>
                <RadioButtonGroup name="lift_weight" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.five}</label>
                <RadioButtonGroup name="stand_hours" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.six}</label>
                <RadioButtonGroup name="walking_job" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.seven}?</label>
                <RadioButtonGroup name="stand_bend" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.eight}</label>
                <RadioButtonGroup name="basic_maths" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.nine}</label>
                <RadioButtonGroup name="tape_mesurement" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.ten}</label>
                <RadioButtonGroup name="use_calculator" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.eleven}</label>
                <RadioButtonGroup name="use_pc" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.twelve}</label>
                <RadioButtonGroup name="operated_forklift" className="right" onChange={(event: any) =>{ this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ forklift: false }) : this.setState({ forklift: true })}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>

                {this.state.forklift ?
                    <TextField
                        hintText=""
                        onBlur={(event: any) => {this.handleTargetEvents(event)}}
                        fullWidth={true}
                        floatingLabelText={experience}
                        name="forklift_experience"
                    />
                    : null}
                <br /><br />

                <label className="inline-fields">{questions.thirteen}</label>
                <RadioButtonGroup name="certified_forklift" className="right"  onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.fourteen}</label>
                <RadioButtonGroup name="operated_pallet_jack" className="right" onChange={(event: any) =>{ this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ palletJack: false }) : this.setState({ palletJack: true })}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>

                {this.state.palletJack ?
                    <TextField
                        hintText=""
                        onBlur={(event: any) => {this.handleTargetEvents(event)}}
                        fullWidth={true}
                        floatingLabelText="Enter years of experience"
                        name="pallet_jack_experience"
                    />
                    : null}
                <br /><br />

                <label className="inline-fields">{questions.fifteen}</label>
                <RadioButtonGroup name="steel_shoes" className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{color: "gray",fontWeight: 500}}
                    />
                </RadioButtonGroup>
                <br /><br />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default lightIndustrialSkills;