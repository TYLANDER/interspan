import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Login, Signup, Dashboard, Forget, Home, JobForm, AddJob } from './containers';
import { AboutUs, EmployeeInfo, HireFor } from './components';

class AppRoutes extends React.Component<any, any> {

    //Checking user auth for route protection
    authenticated() {
        if (!localStorage.getItem('user-info')) {
            browserHistory.push("/login");
        }
        else {
            console.log("Login Successfull");
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="login" component={Login} />
                    <Route path="employee" component={EmployeeInfo} />
                    <Route path="about" component={AboutUs} />
                    <Route path="hire" component={HireFor} />
                    <Route path="add" component={AddJob} />
                    <Route path="job" component={JobForm} onEnter={this.authenticated} />
                    <Route path="signup" component={Signup} />
                    <Route path="forget" component={Forget} />
                    <Route component={Dashboard} >
                        <IndexRoute component={Home} />
                        <Route path="home" component={Home} />
                    </Route>
                </Route>
            </Router>
        );
    }

}
export default AppRoutes;