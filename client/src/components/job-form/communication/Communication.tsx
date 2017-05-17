import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButton, RadioButtonGroup } from 'material-ui';

class Communication extends React.Component<any, any>{
    jsonData: any;
    constructor(props: any) {
        super(props);
        this.jsonData = this.props.jsonData;
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const {title, fluent, yes, no, billingual, ESL, levelOfCommunication, understandSpeak, understandEnglish, understandInstructions} = this.jsonData;
        return (
            <div className="job-applicant-container">
                <label>{title} </label>
                <p>{fluent}</p>
                <RadioButtonGroup name="fluent">
                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                <p>{levelOfCommunication}</p>
                <RadioButtonGroup name="language">
                    <RadioButton
                        value="Understand/Speak no English"
                        label={understandSpeak}
                    />
                    <RadioButton
                        value="Understand a few English instructions"
                        label={understandEnglish}
                    />
                    <RadioButton
                        value="Understand most English instructions"
                        label={understandInstructions}
                    />
                    <RadioButton
                        value="Learning English as ESL"
                        label={ESL}
                    />
                    <RadioButton
                        value="Bilingual English/Spanish"
                        label={billingual}
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Communication;