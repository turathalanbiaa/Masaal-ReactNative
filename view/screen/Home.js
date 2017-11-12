import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import {Container} from 'native-base';
import {fetchRecentQuestionsWithAnnouncements} from './../../redux/actions/questionActions';
import QuestionList from "../component/question/QuestionList";
import Header from "../component/general/header/Header";

class Home extends Component
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

    _onDrawer = () =>
    {

    };

    render()
    {
        return (

            <Container>

                <Header title={String.home} onDrawer={this._onDrawer}/>

                <View style={{flex: 1}}>


                    <QuestionList
                        questions={this.props.questions}
                        refreshing={this.props.fetching}
                        onRefresh={this._onRefresh}
                        onEndReached={this._onEndReached}
                        firstError={this.props.fetchingError && this.props.questions.length === 0}
                        moreError={this.props.fetchingError && this.props.questions.length > 0}
                    />


                </View>

            </Container>

        );
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
})(Home);
