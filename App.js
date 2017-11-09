import React from 'react';
import {Root} from 'native-base';
import Navigator from './navigator';
import {addNavigationHelpers} from 'react-navigation';
import {connect , Provider} from 'react-redux';
import store from './redux/store';

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
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppWithNavigationState />
                </Root>
            </Provider>
        );
    }
}

export default FirstRoot