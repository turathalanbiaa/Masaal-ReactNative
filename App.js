import React from 'react';
import {Root} from 'native-base';
import Navigator from './navigator';
import {addNavigationHelpers} from 'react-navigation';
import {connect , Provider} from 'react-redux';
import store from './redux/store';
import FirebaseNotification from "./FirebaseNotification";

import {NavigationActions} from 'react-navigation';

class App extends React.Component
{
    render()
    {
        return (
                <Navigator
                    navigation=
                        {
                            addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})
                        }
                />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


class FirstRoot extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <FirebaseNotification/>
                    <AppWithNavigationState/>
                </Root>
            </Provider>
        );
    }
}

export default FirstRoot