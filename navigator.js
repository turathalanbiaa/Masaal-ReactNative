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
import Bookmark from "./view/screen/Bookmark";
import SplashScreen from "./view/screen/SplashScreen";
import Setup from "./view/screen/Setup";
import PostBookmark from "./view/screen/PostBookmark";

const AppNavigation = StackNavigator({
    Splash : {screen : SplashScreen},
    Home : {screen : HomeScreen},
    Posts : {screen : PostsScreen} ,
    MyQuestions : {screen : MyQuestionsScreen} ,
    SendQuestion : {screen : SendQuestionScreen} ,
    Search : {screen : Search} ,
    SearchResult : {screen : SearchResult} ,
    QuestionBookmark : {screen : Bookmark} ,
    PostBookmark : {screen : PostBookmark} ,
    Tags : {screen : Tag} ,
    Settings : {screen : SettingsScreen},
    Setup : {screen : Setup}
}, {navigationOptions : { header: null }});

export default AppNavigation;