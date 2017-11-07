import React , {Component} from 'react';
import {View , StyleSheet} from 'react-native';
import {Button , Icon} from 'native-base';

export default class QuestionActions extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Button light>
                    <Icon name='md-image' />
                </Button>
                <Button style={styles.button}  light>
                    <Icon name='md-share' />
                </Button>
                <Button style={styles.button}  light>
                    <Icon name='logo-youtube' />
                </Button>
                <Button style={styles.button}  light>
                    <Icon name='md-link' />
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'row'
    } ,
    button : {
        marginRight : 5 , marginLeft : 5
    }
});