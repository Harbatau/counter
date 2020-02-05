import React from 'react';
import './App.sass';
import Counter from "./components/counter";
import Settings from "./components/Settings";

class App extends React.Component {

    state = {
        counter: 0,
        minCounter: 0,
        maxCounter: 99,
        isSettingButtonNotReady: true,
        isNumberValuesNotValid: false,
        minInput: {
            inputValue: '0',
            lastRealValue: '0',
            isInputFocused: false,
            isValueEqualToCurrentSetting: true
        },
        maxInput: {
            inputValue: '99',
            lastRealValue: '99',
            isInputFocused: false,
            isValueEqualToCurrentSetting: true
        },
        isFirstVersion: true,
        isSettingsOpened: false
    };

    setUnitToCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    reset = () => {
        this.setState({counter: this.state.minCounter})
    };

    setValues = () => {
        this.setState({
            counter: this.state.minInput.inputValue === '' ? +this.state.minInput.lastRealValue : +this.state.minInput.inputValue,
            minCounter: this.state.minInput.inputValue === '' ? +this.state.minInput.lastRealValue : +this.state.minInput.inputValue,
            maxCounter: this.state.maxInput.inputValue === '' ? +this.state.maxInput.lastRealValue : +this.state.maxInput.inputValue,
            isSettingButtonNotReady: true,
            minInput: {...this.state.minInput, isValueEqualToCurrentSetting: true},
            maxInput: {...this.state.maxInput, isValueEqualToCurrentSetting: true}
        })
    };

    updateValuesFromInputs = (e, input) => {
        let value = e.currentTarget.value;
        switch (input) {
            case 'maxInput':
                this.setState({maxInput: {...this.state.maxInput, inputValue: value}});
                if (this.state.maxCounter !== +value ||
                    this.state.minCounter !== +this.state.minInput.lastRealValue) {
                    this.setState({isSettingButtonNotReady: false})
                } else this.setState({isSettingButtonNotReady: true});
                if (+value < +this.state.minInput.lastRealValue) {
                    this.setState({isNumberValuesNotValid: true})
                } else this.setState({isNumberValuesNotValid: false});
                break;
            case 'minInput':
                this.setState({minInput: {...this.state.minInput, inputValue: value}});
                if (this.state.minCounter !== +value ||
                    this.state.maxCounter !== +this.state.maxInput.lastRealValue) {
                    this.setState({isSettingButtonNotReady: false})
                } else this.setState({isSettingButtonNotReady: true});
                if (+this.state.maxInput.lastRealValue < +value) {
                    this.setState({isNumberValuesNotValid: true})
                } else this.setState({isNumberValuesNotValid: false});
                break;
        }
    };

    onFocusHandler = (input) => {
        switch (input) {
            case 'maxInput':
                this.setState({
                    maxInput: {
                        ...this.state.maxInput,
                        inputValue: '',
                        isInputFocused: true
                    }
                });
                break;
            case 'minInput':
                this.setState({
                    minInput: {
                        ...this.state.minInput,
                        inputValue: '',
                        isInputFocused: true
                    }
                });
                break;
        }
    };

    onBlurHandler = (e, input) => {
        let value = e.currentTarget.value;
        switch (input) {
            case 'maxInput':
                if (value === '') {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            isInputFocused: false
                        }
                    });
                } else if (+value === this.state.minCounter) {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            lastRealValue: value,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: true
                        }
                    });
                } else {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            lastRealValue: value,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: false
                        }
                    })
                }
                ;
                break;
            case 'minInput':
                if (value === '') {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            isInputFocused: false
                        }
                    });
                } else if (+value === this.state.maxCounter) {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            lastRealValue: value,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: true
                        }
                    });
                } else {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            lastRealValue: value,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: false
                        }
                    })
                }
                ;
                break;
        }
    };

    switchVersion = () => {
        this.setState({isFirstVersion: !this.state.isFirstVersion});
    };

    openSettings = () => {
        this.setState({isSettingsOpened: false})
    };

    render() {
        return (
            <>
                <div className={this.state.isFirstVersion ? 'verSwitcher': 'verSwitcher secondVersion'} onClick={this.switchVersion}>
                    <span className={'currentVersionIsOne'}>1st version</span>
                    <span className={'currentVersionIsTwo'}>2nd version</span>
                    <div className={'switcher'}/>
                </div>
                {this.state.isFirstVersion &&
                <div className="App">
                    <div className={'wrapper'}>
                        <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                                 maxValue={this.state.maxCounter}
                                 setUnitToCounter={this.setUnitToCounter} reset={this.reset}/>
                        <Settings setValues={this.setValues}
                                  updateValuesFromInputs={this.updateValuesFromInputs}
                                  isNumberValuesNotValid={this.state.isNumberValuesNotValid}
                                  isSettingButtonNotReady={this.state.isSettingButtonNotReady}
                                  onFocusHandler={this.onFocusHandler}
                                  onBlurHandler={this.onBlurHandler}
                                  maxInput={this.state.maxInput}
                                  minInput={this.state.minInput}
                        />
                    </div>
                </div>}
                {!this.state.isFirstVersion  &&
                <div className="App secondVersionApp">
                    <div className={'wrapper'}>
                        <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                                 maxValue={this.state.maxCounter}
                                 setUnitToCounter={this.setUnitToCounter} reset={this.reset}
                                 openSettings={this.openSettings} isFirstVersion={this.state.isFirstVersion}/>
                        <Settings setValues={this.setValues}
                                  updateValuesFromInputs={this.updateValuesFromInputs}
                                  isNumberValuesNotValid={this.state.isNumberValuesNotValid}
                                  isSettingButtonNotReady={this.state.isSettingButtonNotReady}
                                  onFocusHandler={this.onFocusHandler}
                                  onBlurHandler={this.onBlurHandler}
                                  maxInput={this.state.maxInput}
                                  minInput={this.state.minInput}
                        />
                    </div>
                </div>}
            </>
        );
    };
}

export default App;


