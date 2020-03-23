const INCREMENT = 'reducer/INCREMENT';
const RESET = 'reducer/RESET';
const SWITCH_VERSION = 'reducer/SWITCH_VERSION';
const OPEN_AND_CLOSE_SETTINGS = 'reducer/OPEN_AND_CLOSE_SETTINGS';

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

    return state;
};

const incrementAC = ({type: INCREMENT});
const resetAC = ({type: RESET});
const switchVersionAC = ({type: SWITCH_VERSION});;
const openAndCloseSettingsAC =({type: OPEN_AND_CLOSE_SETTINGS});

export default reducer;