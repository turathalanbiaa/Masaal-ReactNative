import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';

import {fetchRecentQuestionsWithAnnouncements} from './../../redux/actions/questionActions';
import QuestionList from "../component/question/QuestionList";
import {Drawer ,  List, ListItem , Text} from 'native-base';
import AnnouncementList from "../component/announcement/AnnouncementList";
import Screen from './Screen';


class Home extends Screen
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        I18nManager.forceRTL(false);
        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(0, this.props.requestId));
    }

    _onRefresh = () =>
    {

        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(0, this.props.requestId));
    };

    _onEndReached = () =>
    {
        if (this.props.fetching || this.props.fetchingMore)
        {
            return;
        }

        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(this.props.questions.length, this.props.requestId))
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
        return String.home;
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
        requestId: state.question.requestId
    }
})(Home);
