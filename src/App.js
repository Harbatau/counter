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
        isNumberValuesNotValid: false,
        maxInputValue: '99',
        minInputValue: '0',
    };

    setUnitToCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    reset = () => {
        this.setState({counter: this.state.minCounter})
    };

    setValues = () => {
        this.setState({
            counter: +this.state.minInputValue, minCounter: +this.state.minInputValue,
            maxCounter: +this.state.maxInputValue, isSettingButtonNotReady: true
        })
    };

    updateValuesFromInputs = (e, input) => {
        let value = e.currentTarget.value;
        switch (input) {
            case 'maxInput':
                this.setState({maxInputValue: value});
                if (this.state.maxCounter !== +value) {
                    this.setState({isSettingButtonNotReady: false})
                } else this.setState({isSettingButtonNotReady: true});
                if (+value < +this.state.minInputValue) {
                    this.setState({isNumberValuesNotValid: true})
                } else this.setState({isNumberValuesNotValid: false});
                break;
            case 'minInput':
                this.setState({minInputValue: value});
                if (this.state.minCounter !== +value) {
                    this.setState({isSettingButtonNotReady: false})
                } else this.setState({isSettingButtonNotReady: true});
                if (+this.state.maxInputValue < +value) {
                    this.setState({isNumberValuesNotValid: true})
                } else this.setState({isNumberValuesNotValid: false});
                break;
        }
    };

    onBlurHandler = (e, input) => {
        let value = e.currentTarget.value;
        switch (input) {
            case 'maxInput':
                if (value === '') {
                    this.setState({maxInputValue: `${this.state.maxCounter}`});
                    e.currentTarget.value = `${this.state.maxValue}`
                } else e.currentTarget.value = this.state.maxInputValue;
                break;
            case 'minInput':
                if (value === '') {
                    this.setState({minInputValue: `${this.state.minCounter}`});
                    e.currentTarget.value = `${this.state.minValue}`
                } else e.currentTarget.value = this.state.minInputValue;
                break;
        }
    };

    render() {
        return (
            <div className="App">
                <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                         maxValue={this.state.maxCounter}
                         setUnitToCounter={this.setUnitToCounter} reset={this.reset}/>
                <Settings setValues={this.setValues}
                          updateValuesFromInputs={this.updateValuesFromInputs}
                          maxInputValue={this.state.maxInputValue} minInputValue={this.state.minInputValue}
                          isNumberValuesNotValid={this.state.isNumberValuesNotValid}
                          isSettingButtonNotReady={this.state.isSettingButtonNotReady}
                          onBlurHandler={this.onBlurHandler}
                />
            </div>
        );
    }
}

export default App;


