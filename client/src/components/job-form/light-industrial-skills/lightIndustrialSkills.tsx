import * as React from 'react';
import './lightIndustrialSkills.css';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';

class lightIndustrialSkills extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            forklift: false,
            palletJack: false,
            selectedJson: this.props.jsonData,
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
                certified_forklift: false,
                operated_pallet_jack: false,
                steel_shoes: false
            }
        };
    }

    //Getting skills form data from local storage
    componentWillMount() {
        if (localStorage.getItem('skills-form') !== null) {
            let data: any = localStorage.getItem('skills-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        this.props.handleNext("skills-form", this.state.form);
    }

    //Handling previous state
    handlePrev = () => {
        this.props.handlePrev();
    }

    //Handling input form state of the component
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }
    render() {
        const { questions, yes, no, noExperience, lessThanOneYear, oneToFiveYears, sixToTenYears, tenYearsOrMore, assembly, pullingOrders, productionLine, packingMaterials,
            loadingLifter, bandingMachine, upsShippingLabels, dataEntry, countingMaterial, workingFrom, gluingBoxes, stacker, qualityControl, weighingMaterial, noneOfAbove,
            lessThanTenLbs, upToTenLbs, experience, upToTwentyLbs, upToSixtyLbs, sixtyOneOrMore } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="job-applicant-container">
                <label className="title">{questions.one}</label>
                <RadioButtonGroup defaultSelected={formRef.industrial_experience} name="industrial_experience" onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                <label className="title">{questions.two}</label>
                <RadioButtonGroup name="experience_with" defaultSelected={formRef.experience_with} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                <label className="title">{questions.three}</label>
                <RadioButtonGroup name="lifting" defaultSelected={formRef.lifting} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                <div className="sections">
                    <label className="inline-fields">{questions.four}</label>
                    <RadioButtonGroup name="lift_weight" defaultSelected={formRef.lift_weight} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.five}</label>
                    <RadioButtonGroup name="stand_hours" defaultSelected={formRef.stand_hours} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.six}</label>
                    <RadioButtonGroup name="walking_job" className="right" defaultSelected={formRef.walking_job} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.seven}?</label>
                    <RadioButtonGroup name="stand_bend" className="right" defaultSelected={formRef.stand_bend} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.eight}</label>
                    <RadioButtonGroup name="basic_maths" className="right" defaultSelected={formRef.basic_maths} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.nine}</label>
                    <RadioButtonGroup name="tape_mesurement" className="right" defaultSelected={formRef.tape_mesurement} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.ten}</label>
                    <RadioButtonGroup name="use_calculator" className="right" defaultSelected={formRef.use_calculator} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.eleven}</label>
                    <RadioButtonGroup name="use_pc" className="right" defaultSelected={formRef.use_pc} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.twelve}</label>
                    <RadioButtonGroup name="operated_forklift" className="right" defaultSelected={formRef.operated_forklift !== "false" ? "true" : "false"} onChange={(event: any) => { this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ forklift: false }) : this.setState({ forklift: true }) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    {this.state.forklift || formRef.operated_forklift !== "false" ?
                        <TextField
                            hintText=""
                            value={formRef.operated_forklift}
                            onChange={(event: any) => {
                                formRef.operated_forklift = event.target.value
                                this.setState(formRef);
                            }
                            }
                            onBlur={(event: any) => { this.handleTargetEvents(event) }}
                            fullWidth={true}
                            floatingLabelText={experience}
                            name="operated_forklift"
                        />
                        : null}
                    <br /><br />
                    <label className="inline-fields">{questions.thirteen}</label>
                    <RadioButtonGroup name="certified_forklift" className="right" defaultSelected={formRef.certified_forklift !== "false" ? "true" : "false"} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    <br /><br />
                    <label className="inline-fields">{questions.fourteen}</label>
                    <RadioButtonGroup name="operated_pallet_jack" className="right" defaultSelected={formRef.operated_pallet_jack !== "true" ? "false" : "true"} onChange={(event: any) => { this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ palletJack: false }) : this.setState({ palletJack: true }) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                    {this.state.palletJack || formRef.operated_pallet_jack !== "true" ?
                        <TextField
                            hintText=""
                            onBlur={(event: any) => { this.handleTargetEvents(event) }}
                            fullWidth={true}
                            onChange={(event: any) => {
                                formRef.operated_pallet_jack = event.target.value
                                this.setState(formRef);
                            }
                            }
                            value={formRef.operated_pallet_jack}
                            floatingLabelText="Enter years of experience"
                            name="operated_pallet_jack"
                        />
                        : null}
                    <br /><br />
                    <label className="inline-fields">{questions.fifteen}</label>
                    <RadioButtonGroup name="steel_shoes" defaultSelected={formRef.steel_shoes} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                        <RadioButton
                            className="inline-radio"
                            value="true"
                            label={yes}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                        <RadioButton
                            className="inline-radio"
                            value="false"
                            label={no}
                            labelStyle={{ color: "gray", fontWeight: 500 }}
                        />
                    </RadioButtonGroup>
                </div>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default lightIndustrialSkills;