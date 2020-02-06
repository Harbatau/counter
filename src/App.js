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
        });
        if (!this.state.isFirstVersion) this.setState({isSettingsOpened: false});
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

    onBlurHandler = (input) => {
        switch (input) {
            case 'maxInput':
                let maxValue = this.state.maxInput.inputValue;
                if (maxValue === '') {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            isInputFocused: false
                        }
                    });
                } else if (+maxValue === this.state.maxCounter) {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            lastRealValue: maxValue,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: true
                        }
                    });
                } else {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            lastRealValue: maxValue,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: false
                        }
                    })
                }
                break;
            case 'minInput':
                let minValue = this.state.minInput.inputValue;
                if (minValue === '') {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            isInputFocused: false
                        }
                    });
                } else if (+minValue === this.state.minCounter) {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            lastRealValue: minValue,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: true
                        }
                    });
                } else {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            lastRealValue: minValue,
                            isInputFocused: false,
                            isValueEqualToCurrentSetting: false
                        }
                    })
                }
                break;
        }
    };

    switchVersion = () => {
        this.setState({isFirstVersion: !this.state.isFirstVersion});
    };

    openAndCloseSettings = () => {
        this.setState({isSettingsOpened: !this.state.isSettingsOpened})
    };

    render() {
            window.stote = this.state;
        return (
            <>
                <div className={this.state.isFirstVersion ? 'verSwitcher' : 'verSwitcher secondVersion'}
                     onClick={this.switchVersion}>
                    <span className={'currentVersionIsOne'}>1st version</span>
                    <span className={'currentVersionIsTwo'}>2nd version</span>
                    <div className={'switcher'}/>
                </div>
                <div className={this.state.isFirstVersion ? 'App' : 'App secondVersionApp'}>
                    <div className={'wrapper'}>
                        <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                                 maxValue={this.state.maxCounter}
                                 setUnitToCounter={this.setUnitToCounter} reset={this.reset}
                                 openAndCloseSettings={this.openAndCloseSettings} isFirstVersion={this.state.isFirstVersion}
                                 isSettingsOpened={this.state.isSettingsOpened}
                        />
                        <Settings setValues={this.setValues}
                                  updateValuesFromInputs={this.updateValuesFromInputs}
                                  isNumberValuesNotValid={this.state.isNumberValuesNotValid}
                                  isSettingButtonNotReady={this.state.isSettingButtonNotReady}
                                  onFocusHandler={this.onFocusHandler}
                                  onBlurHandler={this.onBlurHandler}
                                  maxInput={this.state.maxInput} minInput={this.state.minInput}
                                  isSettingsOpened={this.state.isSettingsOpened}
                                  openAndCloseSettings={this.openAndCloseSettings}
                                  isFirstVersion={this.state.isFirstVersion}
                        />
                    </div>
                </div>
            </>
        );
    };
}

export default App;


