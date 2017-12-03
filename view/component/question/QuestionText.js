import React , {Component} from 'react';
import {View , Text , StyleSheet , Platform} from 'react-native';

export default class QuestionText extends Component
{
    render()
    {
        return (
            <View style={this.props.style}>
                <Text style={styles.primaryText}>{this.props.title}</Text>
                <Text selectable={true} style={styles.paragraph}>{this.props.content}</Text>
            </View>
        );
    }
}

QuestionText.defaultProps = {
    style : {}
};

const styles = StyleSheet.create({
    primaryText: {
        marginBottom : 8,
        fontSize : 16 ,
        color : '#2B2B2B' ,
        fontFamily : Platform.OS ==="ios" ? 'CoconNextArabic-Light' : 'cocon',
        textAlign : 'left'
    },
    paragraph : {
        textAlign : 'left',
        fontSize: 14 ,
        color : '#777777' ,
        fontFamily : 'JF Flat',
    }
});