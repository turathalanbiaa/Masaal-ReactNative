import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import {fetchRecentQuestionsWithAnnouncements} from './../../redux/actions/questionActions';
import QuestionList from "../component/question/QuestionList";
import AnnouncementList from "../component/announcement/AnnouncementList";
import Screen from './Screen';
import Setting from "../../constant/Setting";
import JSHelper from "../../utils/JSHelper";


class Home extends Screen
{

    componentDidMount()
    {
        this.loadQuestion();
    }

    _onRefresh = () =>
    {
        this.loadQuestion();
    };

    loadQuestion = (offset = 0) =>
    {
        let type = JSHelper.getScreenParams(this.props.navigation , "type" , 1);
        let lang = Setting.getCurrentLanguage();

        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(type , lang , offset, this.props.requestId));
    };

    _onEndReached = () =>
    {
        if (this.props.fetching || this.props.fetchingMore || this.props.newCount === 0)
        {
            return;
        }

        this.loadQuestion(this.props.questions.length);
    };


    renderContent()
    {
        return (
            <View style={{flex: 1}}>
                <QuestionList
                    questions={this.props.questions}
                    refreshing={this.props.fetching}
                    header={<AnnouncementList announcements={this.props.announcements}/>}
                    onRefresh={this._onRefresh}
                    onEndReached={this._onEndReached}
                    firstError={this.props.fetchingError && this.props.questions.length === 0}
                    moreError={this.props.fetchingError && this.props.questions.length > 0}
                />
            </View>
        )
    }

    title = () =>
    {
        let type = JSHelper.getScreenParams(this.props.navigation , "type" , 1);
        return type === 1 ? String.feqh : String.aqaed;
    }


}

export default connect((state) =>
{
    return {
        fetching: state.question.fetching,
        fetchingError: state.question.fetchingError,
        fetchingMore: state.question.fetchingMore,
        questions: state.question.questions,
        announcements: state.question.announcements ,
        newCount : state.question.newCount ,
        requestId: state.question.requestId
    }
})(Home);
