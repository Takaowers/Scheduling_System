import React, { Component } from 'react';
import Scheduler from './components/Scheduler';
import './App.css';
import Toolbar from './components/Toolbar';
 
const data = [
    
];

    class App extends Component {
        state = {
            currentTimeFormatState: true
        };
    handleTimeFormatStateChange = (state) => {
        this.setState({

            currentTimeFormatState: state
        })
    }
 
    render() {
        const { currentTimeFormatState } = this.state;
        return (
            <div>
                <div className="tool-bar">
                    <Toolbar
                        timeFormatState={currentTimeFormatState}
                        onTimeFormatStateChange={this.handleTimeFormatStateChange}
                    />
                </div>
                <div className='scheduler-container'>
                    <Scheduler
                        events={data}
                        timeFormatState={currentTimeFormatState}
                    />
                </div>
            </div>
        );
    }
}

 export default App;