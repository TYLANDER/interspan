import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Login, Signup, Dashboard, Home } from './containers';

class AppRoutes extends React.Component<any, any> {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Login} />
                    <Route path="login" component={Login} />
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