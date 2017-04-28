import * as React from 'react';
import './Home.css';
import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';
import { RaisedButton } from 'material-ui'

class Home extends React.Component<any, any> {
    panelArray: any;
    render() {
        let panelsList = [
            { title: 'Light Industrial Worker', location: 'Elements, outside', duration: 'part-Time', hrs: '8AM-4PM' },
            { title: 'Light Industrial Worker', location: 'Elements, outside', duration: 'part-Time', hrs: '8AM-4PM' },
            { title: 'Light Industrial Worker', location: 'Elements, outside', duration: 'part-Time', hrs: '8AM-4PM' },
            { title: 'Light Industrial Worker', location: 'Elements, outside', duration: 'part-Time', hrs: '8AM-4PM' },
            { title: 'Light Industrial Worker', location: 'Elements, outside', duration: 'part-Time', hrs: '8AM-4PM' },
            { title: 'Light Industrial Worker', location: 'Elements, outside', duration: 'part-Time', hrs: '8AM-4PM' },
        ];
        this.panelArray = (
            panelsList.map((d, i) => {
                return (
                    <Paper zDepth={2} key={i} className="apply-paper">
                        <div className="paper-container">
                            <h3>Light Industrial Worker</h3>
                            <div className="text-left">
                                <div>
                                    <span>Location: </span><span>Elements, outside</span>
                                </div>
                                <div>
                                    <span>Duration: </span><span>Part-Time</span>
                                </div>
                                <div>
                                    <span>Hours: </span><span>8AM-4PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="paper-bar"></div>
                        <div className="text-left">
                            <FlatButton label="MORE" />
                            <FlatButton label="APPLY" />
                        </div>
                    </Paper>
                )
            })
        )
        return (
            <div>
                {this.props.children}
                <div className="home-container">
                    <h2 className="title"> We span the gap</h2>
                    <div className="title-desc">
                        InterSpan provides quality employees to companies that need them.
                            </div>

                    <p className="apply-desc">
                        We have open positions now, and applying is easy.
                            </p>
                    <RaisedButton primary label="Apply" onTouchTap={this.props.logout} />
                    <h1>Positions</h1>
                </div>
                {this.panelArray}
            </div>
        );
    }
}

export default Home;