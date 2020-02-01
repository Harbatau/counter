import React from 'react';
import './App.sass';
import Counter from "./components/counter";
import Settings from "./components/setValues";

class App extends React.Component {

    state = {
        counter: 0,
        minCounter: 0,
        maxCounter: 99,
        isSettingButtonNotReady: true,
        maxInputValue: '99',
        minInputValue: '0',
        maxInputChangedValue: '99',
        minInputChangedValue: '0'

    };

    setUnitToCounter = () => {
        let counterValue = this.state.counter + 1;
        this.setState({counter: counterValue});
    };

    reset = () => {
        this.setState({counter: this.state.minCounter})
    };

    setValues = () => {
        this.setState({
            counter: +this.state.minInputChangedValue, minCounter: +this.state.minInputChangedValue,
            maxCounter: +this.state.maxInputChangedValue, isSettingButtonNotReady: true
        })
    };

    settingsValidation = () => {
        if (`${this.state.minCounter}` !== this.state.minInputChangedValue &&
            `${this.state.maxCounter}` !== this.state.maxInputChangedValue) {
            this.setState({isSettingButtonNotReady: false})
        } else this.setState({isSettingButtonNotReady: true});
        console.log(this.state)
    };

    updateMaxValuesFromInputs = (e) => {
        let value = e.target.value;
        this.setState({maxInputChangedValue: value})
    };

    updateMinValuesFromInputs = (e) => {
        let value = e.target.value;
        this.setState({minInputChangedValue: value})
    };

    onFocusAndBlurHandler = (object) => {
        this.setState(object)
    };

    render() {
        return (
            <div className="App">
                <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                         maxValue={this.state.maxCounter}
                         setUnitToCounter={this.setUnitToCounter} reset={this.reset}/>
                <Settings setValues={this.setValues} settingsValidation={this.settingsValidation}
                          updateMaxValuesFromInputs={this.updateMaxValuesFromInputs}
                          updateMinValuesFromInputs={this.updateMinValuesFromInputs}
                          onFocusAndBlurHandler={this.onFocusAndBlurHandler} data={this.state}
                          />
            </div>
        );
    }
}

export default App;


