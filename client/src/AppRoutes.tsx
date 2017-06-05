import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Login, Signup, Dashboard, Home, JobForm, AddJob} from './containers';
import { AboutUs, EmployeeInfo, HireFor} from './components';

class AppRoutes extends React.Component<any, any> {

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
                    <Route path="job" component={JobForm} />
                    <Route path="signup" component={Signup} />
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