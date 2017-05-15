import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons"
import { Checkbox } from 'material-ui'
import "./Certification.css";
class Certification extends React.Component<any, any>{
    constructor() {
        super();
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
                <label> CERTIFICATION & AUTHORIZATION for RELEASE of PERSONAL DATA</label>
                <p className="paragraph">I certify the information provided in this Application for Employment and accompanying documents is true, correct, and complete.
                Any misrepresentation of information or significant omissions will be cause for rejection of my application or for subsequent discipline up to and including my dismissal from
                employment if discovered at a later date.  I understand that acceptance of an offer of employment does not create a contractual obligation upon the employer to continue to employ
                me in the future.  If employed, I understand that I will be an employee “at will” and either InterSpan, Inc. or I may terminate my employment relationship at any time or
                without notice for any reason. All information (including information on any accompanying resume and documents) is subject to verification.
                I authorize and consent to any current and prior employers, educational institutions, law enforcement agency, financial institution, consumer reporting agency,
                court and persons or organizations named in this application (or accompanying resume) to release any information to InterSpan, Inc. that may be required to make an employment
                decision. I understand and acknowledge that an employment offer and/or my continuing employment are conditioned upon the results of any background check, consumer report or
                verification efforts.  I hereby release from liability and hold harmless all persons and corporations supplying this information to InterSpan, Inc. and/or its agents.
                A photocopy of this authorization is as effective as the original.</p>
                <div style={{maxWidth:"150px"}}>
                <Checkbox
                    label="I Agreed"
                />
                </div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default Certification;