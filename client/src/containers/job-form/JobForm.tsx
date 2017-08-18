import * as React from 'react';
import  MainJobForm  from './../../components/job-form/JobForm';
import { connect } from 'react-redux';
import './JobForm.css';
import JobActions from "../../store/action/jobs";

class JobForm extends React.Component<any, any>{

    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div className="job-form-container">
                <MainJobForm language={this.props.language} applyJob={this.props.applyJob} jobObj={this.props.jobObj} />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { 
        language: state.jobReducer.language,
        jobObj: state.jobReducer

    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        applyJob: (payload:any) => dispatch(JobActions.applyJob(payload))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(JobForm);