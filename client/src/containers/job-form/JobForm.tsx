import * as React from 'react';
import  MainJobForm  from './../../components/job-form/JobForm';
import './JobForm.css';
class JobForm extends React.Component<any, any>{

    constructor(){
        super();

        this.state = {
            selectedLanguage : 'en'
        };
    }
    render(){

        return(
            <div className="job-form-container">
                {/*{ this.state.selectedLanguage == 'en'? true : false }*/}
                <MainJobForm />
            </div>
        );
    }
}

export default JobForm;