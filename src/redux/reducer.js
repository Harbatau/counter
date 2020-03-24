import {default} from "react-redux/lib/utils/Subscription";

const INCREMENT = 'reducer/INCREMENT';
const RESET = 'reducer/RESET';
const SWITCH_VERSION = 'reducer/SWITCH_VERSION';
const OPEN_AND_CLOSE_SETTINGS = 'reducer/OPEN_AND_CLOSE_SETTINGS';
const SET_VALUE = 'reducer/SET_VALUE';
const UPDATE_VALUES_FROM_MIN = 'reducer/UPDATE_VALUES_FROM_MIN';
const UPDATE_VALUES_FROM_MAX = 'reducer/UPDATE_VALUES_FROM_MAX';
const ON_FOCUS_MIN = 'reducer/ON_FOCUS_MIN';
const ON_FOCUS_MAX = 'reducer/ON_FOCUS_MAX';
const ON_BLUR_MIN = 'reducer/ON_BLUR_MIN';
const ON_BLUR_MAX = 'reducer/ON_BLUR_MAX';

const initialState = {
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case RESET:
            return {
                ...state,
                counter: state.minCounter
            };
        case SWITCH_VERSION:
            return {
                ...state,
                isFirstVersion: !state.isFirstVersion
            };
        case OPEN_AND_CLOSE_SETTINGS:
            return {
                ...state,
                isSettingsOpened: !state.isSettingsOpened
            };
        case SET_VALUE:
            return {
                ...state,
                counter: state.minInput.inputValue === '' ? +state.minInput.lastRealValue : +state.minInput.inputValue,
                minCounter: state.minInput.inputValue === '' ? state.minInput.lastRealValue : state.minInput.inputValue,
                maxCounter: state.maxInput.inputValue === '' ? +state.maxInput.lastRealValue : +state.maxInput.inputValue,
                isSettingButtonNotReady: true,
                minInput: {...state.minInput, isValueEqualToCurrentSetting: true},
                maxInput: {...state.maxInput, isValueEqualToCurrentSetting: true},
                isSettingsOpened: !state.isFirstVersion ? false : state.isSettingsOpened
            };
        case UPDATE_VALUES_FROM_MIN:
            let minValue  = action.event.currentTarget.value;
            if (+minValue > 999) return;
            let newMinState = {...state, minInput: {...state.minInput, inputValue: minValue }};
            if ((state.minCounter === +minValue &&
                state.maxCounter === +state.maxInput.lastRealValue) ||
                (minValue === '' && (+state.minInput.lastRealValue === state.minCounter))) {
                newMinState = {...newMinState, isSettingButtonNotReady: true}
            } else newMinState = {...newMinState, isSettingButtonNotReady: false};
            if (+state.maxInput.lastRealValue <= +minValue || +minValue < 0) {
                newMinState = {...newMinState, isNumberValuesNotValid: true}
            } else newMinState = {...newMinState, isNumberValuesNotValid: false};
            if (+minValue === state.minCounter ||
                (minValue === '' && (+state.minInput.lastRealValue === state.minCounter))) {
                newMinState = {
                    ...newMinState,
                    minInput: {
                        ...newMinState.minInput,
                        isValueEqualToCurrentSetting: true
                    }
                };
            } else newMinState = {
                ...newMinState,
                minInput: {
                    ...newMinState.minInput,
                    isValueEqualToCurrentSetting: false
                }
            };
            return newMinState;
        case UPDATE_VALUES_FROM_MAX:
            let value  = action.event.currentTarget.value;
            if (+value > 999) return;
            let newMaxState = {...state, maxInput: {...state.maxInput, inputValue: value}};
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

        default:
            return state;
    }
};

const incrementAC = ({type: INCREMENT});
const resetAC = ({type: RESET});
const switchVersionAC = ({type: SWITCH_VERSION});
const openAndCloseSettingsAC = ({type: OPEN_AND_CLOSE_SETTINGS});
const setValuesAC = ({type: SET_VALUE});
const updateValuesFromMinAC = ({type: UPDATE_VALUES_FROM_MIN});
const updateValuesFromMaxAC = ({type: UPDATE_VALUES_FROM_MAX});
const onFocusMinAC = ({type: ON_FOCUS_MIN});
const onFocusMaxAC = ({type: ON_FOCUS_MAX});
const onBlurMinAC = ({type: ON_BLUR_MIN});
const onBlurMaxAC = ({type: ON_BLUR_MAX});


export default reducer;