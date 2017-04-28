import * as React from 'react';
import { NavBar } from '../../components';
import './App.css';

class App extends React.Component<any, any> {
  render() {
    return (
        <div className="app">
            <NavBar />
            <div>
                {this.props.children}
            </div>
            
        </div>
    );
  }
}

export default App;
