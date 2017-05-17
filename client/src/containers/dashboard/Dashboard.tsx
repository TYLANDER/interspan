import * as React from 'react';

class Dashboard extends React.Component<any, any> {

    render() {
        return (
            <div className="container">
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
export default Dashboard;