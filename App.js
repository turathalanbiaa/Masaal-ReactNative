/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import Question from './view/component/question/Question';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}>
{
    render()
    {

        const question = {
            id : 1 ,
            content : 'is allowed to do something with something at something' ,
            userDisplayName : 'Ali Faris' ,
            category : 'Pray' ,
            time : '2017-10-30 00:00' ,
            answer : 'the answer is word word word word word word word word word word word word word word word word word word word word word word word word word' ,
            status : 2 ,
            videoLink : 'https://www.youtube.com/watch?v=g6sV7lRbnn8' ,
            externalLink : 'https://www.youtube.com/watch?v=g6sV7lRbnn8'
        };

        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Question question={question}/>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
