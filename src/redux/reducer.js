const INCREMENT = 'reducer/INCREMENT';
const RESET = 'reducer/RESET';
const SWITCH_VERSION = 'reducer/SWITCH_VERSION';
const OPEN_AND_CLOSE_SETTINGS = 'reducer/OPEN_AND_CLOSE_SETTINGS';
const SET_VALUES = 'reducer/SET_VALUES';
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
                counter: +state.minCounter
            };
        case SWITCH_VERSION:
            return {
                ...state,
                isFirstVersion: !state.isFirstVersion
            };
        case OPEN_AND_CLOSE_SETTINGS:
            if (state.isSettingsOpened) {
                return {
                    ...state,
                    isSettingsOpened: !state.isSettingsOpened,
                    minInput: {
                        ...state.minInput,
                        inputValue: `${state.minCounter}`,
                        lastRealValue: `${state.minCounter}`,
                        isInputFocused: false,
                        isValueEqualToCurrentSetting: true
                    },
                    maxInput: {
                        ...state.maxInput,
                        inputValue: `${state.maxCounter}`,
                        lastRealValue: `${state.maxCounter}`,
                        isInputFocused: false,
                        isValueEqualToCurrentSetting: true
                    }
                }
            } else return {
                ...state,
                isSettingsOpened: !state.isSettingsOpened,
            };
        case SET_VALUES:
            return {
                ...state,
                counter: state.minInput.inputValue === '' ? +state.minInput.lastRealValue : +state.minInput.inputValue,
                minCounter: state.minInput.inputValue === '' ? +state.minInput.lastRealValue : +state.minInput.inputValue,
                maxCounter: state.maxInput.inputValue === '' ? +state.maxInput.lastRealValue : +state.maxInput.inputValue,
                isSettingButtonNotReady: true,
                minInput: {...state.minInput, isValueEqualToCurrentSetting: true},
                maxInput: {...state.maxInput, isValueEqualToCurrentSetting: true},
                isSettingsOpened: !state.isFirstVersion ? false : state.isSettingsOpened
            };
        case UPDATE_VALUES_FROM_MIN:
            let minValue = action.event.currentTarget.value;
            if (+minValue > 999) return state;
            let newMinState = {...state, minInput: {...state.minInput, inputValue: minValue}};
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
            let maxValue = action.event.currentTarget.value;
            if (+maxValue > 999) return state;
            let newMaxState = {...state, maxInput: {...state.maxInput, inputValue: maxValue}};
            if ((state.maxCounter === +maxValue &&
                state.minCounter === +state.minInput.lastRealValue) ||
                (maxValue === '' && (+state.maxInput.lastRealValue === state.maxCounter))) {
                newMaxState = {...newMaxState, isSettingButtonNotReady: true}
            } else newMaxState = {...newMaxState, isSettingButtonNotReady: false};
            if (+maxValue <= +state.minInput.lastRealValue || +maxValue < 0) {
                newMaxState = {...newMaxState, isNumberValuesNotValid: true}
            } else newMaxState = {...newMaxState, isNumberValuesNotValid: false};
            if (+maxValue === state.maxCounter ||
                (maxValue === '' && (+state.maxInput.lastRealValue === state.maxCounter))) {
                newMaxState = {
                    ...newMaxState,
                    maxInput: {
                        ...newMaxState.maxInput,
                        isValueEqualToCurrentSetting: true
                    }
                };
            } else newMaxState = {
                ...newMaxState,
                maxInput: {
                    ...newMaxState.maxInput,
                    isValueEqualToCurrentSetting: false
                }
            };
            return newMaxState;
        case ON_FOCUS_MIN:
            return {
                ...state,
                minInput: {
                    ...state.minInput,
                    inputValue: '',
                    isInputFocused: true
                }
            };
        case ON_FOCUS_MAX:
            return {
                ...state,
                maxInput: {
                    ...state.maxInput,
                    inputValue: '',
                    isInputFocused: true
                }
            };
        case ON_BLUR_MIN:
            let currentMinValue = state.minInput.inputValue;
            if (currentMinValue === '') {
                return {
                    ...state,
                    minInput: {
                        ...state.minInput,
                        isInputFocused: false
                    }
                }
            } else {
                return {
                    ...state,
                    minInput: {
                        ...state.minInput,
                        lastRealValue: currentMinValue,
                        isInputFocused: false,
                    }
                }
            }
        case ON_BLUR_MAX:
            let currentMaxValue = state.maxInput.inputValue;
            if (currentMaxValue === '') {
                return {
                    ...state,
                    maxInput: {
                        ...state.maxInput,
                        isInputFocused: false
                    }
                }
            } else {
                return {
                    ...state,
                    maxInput: {
                        ...state.maxInput,
                        lastRealValue: currentMaxValue,
                        isInputFocused: false,
                    }
                }
            }
        default:
            return state;
    }
};

export const incrementAC = () => {
    return {type: INCREMENT}
};
export const resetAC = () => {
    return {type: RESET}
};
export const switchVersionAC = () => {
    return {type: SWITCH_VERSION}
};
export const openAndCloseSettingsAC = () => {
    return {type: OPEN_AND_CLOSE_SETTINGS}
};
export const setValuesAC = () => {
    return {type: SET_VALUES}
};
export const updateValuesFromMinAC = (event) => {
    return {type: UPDATE_VALUES_FROM_MIN, event}
};
export const updateValuesFromMaxAC = (event) => {
    return {type: UPDATE_VALUES_FROM_MAX, event}
};
export const onFocusMinAC = () => {
    return {type: ON_FOCUS_MIN}
};
export const onFocusMaxAC = () => {
    return {type: ON_FOCUS_MAX}
};
export const onBlurMinAC = () => {
    return {type: ON_BLUR_MIN}
};
export const onBlurMaxAC = () => {
    return {type: ON_BLUR_MAX}
};


export default reducer;