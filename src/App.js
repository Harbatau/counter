import React from 'react';
import './Assets/App.sass';
import {connect} from "react-redux";
import {switchVersionAC} from "./redux/reducer";
import VersionSwitcher from "./components/Settings/VersionSwitcher";
import MainCounter from "./components/CounterBody/MainCounter";

const App = (props) => {

    return (
        <>
           <VersionSwitcher isFirstVersion={props.isFirstVersion} switchVersion={props.switchVersion}/>
           <MainCounter isFirstVersion={props.isFirstVersion} isSettingsOpened={props.isSettingsOpened}/>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isFirstVersion: state.isFirstVersion,
        isSettingsOpened: state.isSettingsOpened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchVersion: () => {
            const action = switchVersionAC();
            dispatch(action)
        },
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;


