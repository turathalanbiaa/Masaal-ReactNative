import {StackNavigator} from 'react-navigation';

//screens
import HomeScreen from './view/screen/Home';
import SendQuestionScreen from './view/screen/SendQuestion';
import PostsScreen from './view/screen/Posts';
import MyQuestionsScreen from './view/screen/MyQuestions';
import SettingsScreen from './view/screen/Settings';
import Search from "./view/screen/Search";
import SearchResult from './view/screen/SearchResult';
import Tag from "./view/screen/Tag";

const AppNavigation = StackNavigator({

    FeqhQuestions : {screen : HomeScreen},
    AqaedQuestions : {screen : HomeScreen},
    FeqhPosts : {screen : PostsScreen} ,
    AqaedPosts : {screen : PostsScreen} ,
    MyQuestions : {screen : MyQuestionsScreen} ,
    SendQuestion : {screen : SendQuestionScreen} ,
    Search : {screen : Search} ,
    SearchResult : {screen : SearchResult} ,
    Bookmark : {screen : SendQuestionScreen} ,
    Tags : {screen : Tag} ,
    Settings : {screen : SettingsScreen}
}, {navigationOptions : { header: null }});

export default AppNavigation;