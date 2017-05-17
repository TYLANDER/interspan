import * as React from 'react';
import  MainJobForm  from './../../components/job-form/JobForm';
import { connect } from 'react-redux';
import './JobForm.css';
class JobForm extends React.Component<any, any>{

    constructor(props:any){
        super(props);
    }
    render(){

        return(
            <div className="job-form-container">
                <MainJobForm language={this.props.language} />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { 
        language: state.jobReducer.language  
    };
};



export default connect(mapStateToProps)(JobForm);