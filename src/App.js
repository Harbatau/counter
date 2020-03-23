import React from 'react';
import './Assets/App.sass';
import Counter from "./components/counter";
import Settings from "./components/Settings";

const App = () => {

    const setUnitToCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    const reset = () => {
        this.setState({counter: this.state.minCounter})
    };

    const setValues = () => {
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

    const updateValuesFromInputs = (e, input) => {
        let value = e.currentTarget.value;
        if (+value > 999) return;
        switch (input) {
            case 'maxInput':
                this.setState({maxInput: {...this.state.maxInput, inputValue: value}});
                if ((this.state.maxCounter === +value &&
                    this.state.minCounter === +this.state.minInput.lastRealValue) ||
                    (value === '' && (+this.state.maxInput.lastRealValue === this.state.maxCounter))) {
                    this.setState({isSettingButtonNotReady: true})
                } else this.setState({isSettingButtonNotReady: false});
                if (+value <= +this.state.minInput.lastRealValue || +value < 0) {
                    this.setState({isNumberValuesNotValid: true})
                } else this.setState({isNumberValuesNotValid: false});
                if (+value === this.state.maxCounter ||
                    (value === '' && (+this.state.maxInput.lastRealValue === this.state.maxCounter))) {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            inputValue: value,
                            isValueEqualToCurrentSetting: true
                        }
                    });
                } else this.setState({
                    maxInput: {
                        ...this.state.maxInput,
                        inputValue: value,
                        isValueEqualToCurrentSetting: false
                    }
                });
                break;
            case 'minInput':
                this.setState({minInput: {...this.state.minInput, inputValue: value}});
                if ((this.state.minCounter === +value &&
                    this.state.maxCounter === +this.state.maxInput.lastRealValue) ||
                    (value === '' && (+this.state.minInput.lastRealValue === this.state.minCounter))) {
                    this.setState({isSettingButtonNotReady: true})
                } else this.setState({isSettingButtonNotReady: false});
                if (+this.state.maxInput.lastRealValue <= +value || +value < 0) {
                    this.setState({isNumberValuesNotValid: true})
                } else this.setState({isNumberValuesNotValid: false});
                if (+value === this.state.minCounter ||
                    (value === '' && (+this.state.minInput.lastRealValue === this.state.minCounter))) {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            inputValue: value,
                            isValueEqualToCurrentSetting: true
                        }
                    });
                } else this.setState({
                    minInput: {
                        ...this.state.minInput,
                        inputValue: value,
                        isValueEqualToCurrentSetting: false
                    }
                });
                break;
        }
    };

    const onFocusHandler = (input) => {
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

    const onBlurHandler = (input) => {
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
                } else {
                    this.setState({
                        maxInput: {
                            ...this.state.maxInput,
                            lastRealValue: maxValue,
                            isInputFocused: false,
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
                } else {
                    this.setState({
                        minInput: {
                            ...this.state.minInput,
                            lastRealValue: minValue,
                            isInputFocused: false,
                        }
                    })
                }
                break;
        }
    };

    const switchVersion = () => {
        this.setState({isFirstVersion: !this.state.isFirstVersion});
    };

    const openAndCloseSettings = () => {
        this.setState({isSettingsOpened: !this.state.isSettingsOpened})
    };

    return (
        <>
            <div className={this.state.isFirstVersion ? 'verSwitcher' : 'verSwitcher secondVersion'}
                 onClick={this.switchVersion}>
                <span className={'currentVersionIsOne'}>1st version</span>
                <span className={'currentVersionIsTwo'}>2nd version</span>
                <div className={'switcher'}/>
            </div>
            <div className={this.state.isFirstVersion ? 'App' : 'App secondVersionApp'}>
                <div className={'absoluteWrapper'}>
                    <div className={'theCounter'}>
                        {!this.state.isSettingsOpened || this.state.isFirstVersion ? 'The Counter' : 'Settings'}
                    </div>
                    <div className={!this.state.isSettingsOpened ?
                        'wrapper' : 'wrapper settingsActive'}>
                        <Counter counterNumber={this.state.counter} minValue={this.state.minCounter}
                                 maxValue={this.state.maxCounter}
                                 setUnitToCounter={this.setUnitToCounter} reset={this.reset}
                                 openAndCloseSettings={this.openAndCloseSettings}
                                 isFirstVersion={this.state.isFirstVersion}
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
            </div>
        </>
    );
};

export default App;


