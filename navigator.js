import {StackNavigator} from 'react-navigation';

//screens
import HomeScreen from './view/screen/Home';
import SendQuestionScreen from './view/screen/SendQuestion';
import PostsScreen from './view/screen/Posts';
import MyQuestionsScreen from './view/screen/MyQuestions';
import SettingsScreen from './view/screen/Settings';

const AppNavigation = StackNavigator({
    Home : {screen : HomeScreen},
    Posts : {screen : PostsScreen} ,
    MyQuestions : {screen : MyQuestionsScreen} ,
    SendQuestion : {screen : SendQuestionScreen} ,
    Settings : {screen : SettingsScreen}
}, {navigationOptions : { header: null }});

export default AppNavigation;