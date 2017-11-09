import React, {Component} from 'react';
import {View, FlatList, I18nManager} from 'react-native';
import {connect} from 'react-redux';
import Question from './../component/question/Question';
import {Container, Header, Left, Button, Icon, Body, Title, Right, Text} from 'native-base';
import {fetchRecentQuestionsWithAnnouncements} from './../../redux/actions/questionActions';

class Home extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        I18nManager.forceRTL(false);
        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(0 , this.props.requestId));
    }

    _onRefresh = () =>
    {
        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(0 , this.props.requestId));
    };

    _onEndReached = () =>
    {
        if (this.props.fetching || this.props.fetchingMore)
            return;

        this.props.dispatch(fetchRecentQuestionsWithAnnouncements(this.props.questions.length , this.props.requestId))
    };


    render()
    {
        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right/>
                </Header>

                <View style={{flex: 1}}>

                    {
                        this.props.questions.length === 0 ? <Text>No Questions</Text> : null
                    }

                    {
                        this.props.errorFetching? <Text>Error</Text> : null
                    }

                    <FlatList
                        data={this.props.questions}

                        renderItem={(item) =>
                        {
                            return <Question question={item.item}/>;
                        }}

                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => null}
                        ListHeaderComponent={() => null}
                        ListFooterComponent={() => <Button onPress={() => this.props.dispatch(fetchRecentQuestionsWithAnnouncements(this.props.questions.length))}><Text>Load More</Text></Button>}
                        refreshing={this.props.fetching}
                        onRefresh={this._onRefresh}
                        onEndReached={this._onEndReached}
                        onEndThreshold={0}
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
        errorFetching: state.question.errorFetching,
        fetchingMore: state.question.fetchingMore,
        questions: state.question.questions ,
        requestId : state.question.requestId
    }
})(Home);