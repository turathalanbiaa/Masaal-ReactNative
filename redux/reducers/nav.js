import {NavigationActions} from 'react-navigation';
import Navigator from './../../navigator';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

const navReducer = (state = initialState, action) =>
{
    const nextState = Navigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default navReducer;