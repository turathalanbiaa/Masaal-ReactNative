import React from 'react';
import {View , I18nManager} from 'react-native';
import Screen from './Screen';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import {search, searchByTag} from "../../redux/actions/questionActions";
import QuestionList from "../component/question/QuestionList";


class SearchResult extends Screen
{

    componentDidMount()
    {
        I18nManager.forceRTL(false);
        let {params} = this.props.navigation.state;

        if (params.tagId !== undefined)
        {
            console.log(params);
            this.props.dispatch(searchByTag(params.tagId , this.props.requestId));
        }
        else
        {
            this.props.dispatch(search(params.text, params.category , this.props.requestId));
        }
    }


    _onRefresh = () =>
    {
        let {params} = this.props.navigation.state;

        if (params.tagId !== undefined)
        {
            console.log(params);
            this.props.dispatch(searchByTag(params.tagId , this.props.requestId));
        }
        else
        {
            this.props.dispatch(search(params.text, params.category , this.props.requestId));
        }
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
    };

    backButton = () => true;

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