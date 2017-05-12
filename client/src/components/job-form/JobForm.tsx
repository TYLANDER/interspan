import * as React from "react";
import "./JobForm.css"
import ApplicantInfo from "./applicant-info/ApplicantInfo"

class MainJobForm extends React.Component <any,any>{
    render(){
        return(
            <div className="main-job-form-container">
                <ApplicantInfo />
            </div>
        )
    }
}

export default MainJobForm;