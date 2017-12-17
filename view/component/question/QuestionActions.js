import React , {Component} from 'react';
import {View , StyleSheet ,I18nManager , Linking} from 'react-native';
import {Button , Icon} from 'native-base';

export default class QuestionActions extends Component
{

    openUrl = (url) =>
    {
        Linking.canOpenURL(url).then((supported) =>
        {
            if (supported)
            {
                Linking.openURL(url);
            }
        })
    };

    render()
    {
        return (
            <View style={styles.container}>

                <Button onPress={this.props.onBookmarkPressed} style={styles.button} transparent small>
                    <Icon style={{color : this.props.bookmark ? 'red' : 'blue'}} name='md-bookmark' />
                </Button>

                <Button onPress={this.props.onSharePressed} style={styles.button} transparent small>
                    <Icon name='md-share' />
                </Button>

                {/*<Button small transparent onPress={this.props.onCapturePressed}>*/}
                    {/*<Icon name='md-image' />*/}
                {/*</Button>*/}

                {
                    (this.props.videoLink !== null && this.props.videoLink !== "")  &&
                    <Button onPress={() => this.openUrl(this.props.videoLink)} style={styles.button} transparent small>
                        <Icon name='logo-youtube' />
                    </Button>
                }


                {
                    (this.props.externalLink !== null && this.props.videoLink !== "") &&
                    <Button onPress={() => this.openUrl(this.props.externalLink)} style={styles.button} transparent small>
                        <Icon name='md-link' />
                    </Button>
                }

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