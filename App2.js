/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {I18nManager, FlatList , RefreshControl , View} from 'react-native';
import Question from './view/component/question/Question';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';


export default class App extends Component<{}>
{
    constructor(props)
    {
        super(props);
        this.state = {refreshing : false , time : 1};
    }

    componentWillMount()
    {
        I18nManager.forceRTL(false);
    }

    _onRefresh = () =>
    {
        console.log("refreshing");
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        } , 3000)
    };

    getQuestions()
    {
        const question = {
            id: 1,
            content: 'is allowed to do something with something at something',
            userDisplayName: 'Ali Faris',
            category: 'Pray',
            time: '2017-10-30 00:00',
            answer: 'the answer is word word word word word word word word word word word word word word word word word word word word word word word word word',
            status: 2,
            videoLink: 'https://www.youtube.com/watch?v=g6sV7lRbnn8',
            externalLink: 'https://www.youtube.com/watch?v=g6sV7lRbnn8'
        };

        let questions = [];
        for (let i = 0;i<10;i++)
        {
            let newQuestion = {...question , id:i};
            console.log(newQuestion);
            questions.push(newQuestion);
        }

        return questions;
    }


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

                <View style={{flex : 1}}>


                    <FlatList
                        data={this.getQuestions()}
                        renderItem={(item) => {
                            console.log(item);
                            return <Question question={item.item}/>;
                        }}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => null}
                        ListHeaderComponent={() => null}
                        ListFooterComponent={() => <Button><Text>Load More</Text></Button>}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        onEndReached={() => console.log('end reached')}
                        onEndThreshold={0}
                    />


                </View>
            </Container>

        );
    }

}