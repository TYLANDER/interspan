import * as React from 'react';
import './add-job.css';
import { Paper, CircularProgress } from 'material-ui';
import { indigo900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Forms from './Forms';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import JobActions from "../../store/action/jobs";

class AddJob extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        //State of component
        this.state = {
            isAuthenticated: false,
            userObj: {},
            loading: false,
            error: false
        };
    };

    //Customize internal application theme
    muiTheme: any = getMuiTheme({
        palette: {
            textColor: indigo900
        },
        appBar: {
            height: 50,
        },
        textField: {
            focusColor: '#2e469e',
            textColor: '#2e469e'
        }
    });

    //Navigate to home page
    handleHomePage() {
        browserHistory.push('/');
    };

    componentWillReceiveProps(newProps: any) {
        //Checking loading state
        newProps.jobObj.isLoading ? this.setState({ loading: true }) : this.setState({ loading: false });

        //Checking error for add job api
        newProps.jobObj.isError ? this.setState({ error: true }) : this.setState({ error: false })

        //Handling success state and navigate user to home page
        newProps.jobObj.success ? browserHistory.push('/') : null;
    };

    handleNext = (values: any) => {
        let users = Object.assign(this.state.userObj, values);

        //Dispatch action and send form data to server
        this.props.postJob(users);
    }

    //Form UI component
    formCard = () => {
        return <Forms clickEvent={this.handleNext} />;
    }

    render() {
        // checking error
        { this.state.error ? alert(this.props.authObj.isError.msg) : null }
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                {this.state.loading ? <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)"
                    style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} /> : <div className="add-job-container">
                        <div className="paper-container">
                            <Paper zDepth={2} className="md-screen">
                                {this.formCard()}
                            </Paper>
                            <div className="sm-screen">
                                {this.formCard()}
                            </div>
                        </div>
                    </div>}
            </MuiThemeProvider>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        jobObj: state.jobReducer

    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        postJob: (payload: any) => dispatch(JobActions.addJobs(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);
