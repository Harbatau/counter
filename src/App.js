import React from 'react';
import './App.sass';
import Counter from "./components/counter";
import Settings from "./components/setValues";

class App extends React.Component {

    state = {
        counter: 0,
        minCounter: 0,
        maxCounter: Infinity,
        isSettingButtonNotReady: true,
        maxInputValue: Infinity,
        minInputValue: 0
    };

    setUnitToCounter = () => {
        let counterValue = this.state.counter + 1;
        this.setState({counter: counterValue});
    };

    reset = () => {
        this.setState({counter: this.state.minCounter})
    };

    setValues = () => {
        this.setState({counter: +this.state.minInputValue, minCounter: +this.state.minInputValue,
            maxCounter: +this.state.maxInputValue})
    };

    settingsValidation = () => {
        if (this.state.minCounter !== this.state.minInputValue &&
            this.state.maxCounter !== this.state.maxInputValue)
        this.setState({isSettingButtonNotReady: !this.state.isSettingButtonNotReady})
    };

    updateMaxValuesFromInputs = (e) => {
        this.setState({maxInputValue: e.target.value})
    };

    updateMainValuesFromInputs = (e) => {
        this.setState({minInputValue: e.target.value})
    };

    render() {
        return (
            <div className="App">
                <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                         maxValue={this.state.maxCounter}
                         setUnitToCounter={this.setUnitToCounter} reset={this.reset}/>
                <Settings setValues={this.setValues} settingsValidation={this.settingsValidation}
                          isButtonNotReady={this.state.isSettingButtonNotReady}
                          updateMaxValuesFromInputs={this.updateMaxValuesFromInputs}
                          updateMainValuesFromInputs={this.updateMainValuesFromInputs}
                          maxInputValue={this.state.maxInputValue} minInputValue={this.state.minInputValue}/>
            </div>
        );
    }
}

export default App;

