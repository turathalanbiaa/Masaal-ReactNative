import React , {Component} from 'react';
import {View , StyleSheet ,I18nManager} from 'react-native';
import {Button , Icon} from 'native-base';

export default class QuestionActions extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Button small transparent>
                    <Icon name='md-image' />
                </Button>
                <Button style={styles.button} transparent small>
                    <Icon name='md-share' />
                </Button>
                <Button style={styles.button} transparent small>
                    <Icon name='logo-youtube' />
                </Button>
                <Button style={styles.button} transparent small>
                    <Icon name='md-link' />
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'row' ,
        backgroundColor : '#EEE',
        marginRight : -8,
        marginLeft : -8,
        padding : 8
    } ,
    button : {

    }
});