import React from 'react';
import {View, I18nManager} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import QuestionList from "../component/question/QuestionList";
import Screen from './Screen';
import {getBookmark} from "../../redux/actions/questionActions";
import Setting from "../../constant/Setting";


class Bookmark extends Screen
{

    componentDidMount()
    {
        I18nManager.forceRTL(Setting.isRTL());
        this.props.dispatch(getBookmark(this.props.requestId));
    }

    _onRefresh = () =>
    {
        this.props.dispatch(getBookmark(this.props.requestId));
    };


    renderContent()
    {
        return (
            <View style={{flex: 1}}>

                <QuestionList
                    questions={this.props.questions}
                    refreshing={this.props.fetching}
                    header={null}
                    onRefresh={this._onRefresh}
                    firstError={this.props.fetchingError && this.props.questions.length === 0}
                    moreError={this.props.fetchingError && this.props.questions.length > 0}
                />

            </View>
        )
    }

    title = () =>
    {
        return String.my_questions;
    }

}

export default connect((state) =>
{
    return {
        fetching: state.question.fetching,
        fetchingError: state.question.fetchingError,
        fetchingMore: state.question.fetchingMore,
        questions: state.question.questions,
        requestId: state.question.requestId
    }
})(Bookmark);
