import React from 'react';
import {View , I18nManager} from 'react-native';
import Screen from './Screen';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import {search} from "../../redux/actions/questionActions";
import QuestionList from "../component/question/QuestionList";


class SearchResult extends Screen
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        I18nManager.forceRTL(false);
        let {category , text} = this.props.navigation.state.params;
        this.props.dispatch(search(text, category , this.props.requestId));
    }


    _onRefresh = () =>
    {
        let {category , text} = this.props.navigation.state.params;
        this.props.dispatch(search(text , category , this.props.requestId));
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

    title = ()=>
    {
        return String.search_result;
    }

}

export default connect((state) => {
    return {
        fetching: state.question.fetching,
        fetchingError: state.question.fetchingError,
        fetchingMore: state.question.fetchingMore,
        questions: state.question.questions,
        requestId: state.question.requestId
    }
})(SearchResult)