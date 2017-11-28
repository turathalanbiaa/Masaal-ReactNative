import React , {Component} from 'react';
import {View , StyleSheet} from 'react-native';
import {CardItem , Body , Text} from 'native-base';
import String from './../../../res/string/String';


export default class Announcement extends Component
{

    render()
    {
        return (
            <View style={{marginTop : 8}}>
                <CardItem>
                    <Body>
                    <Text style={styles.header}>{String.announcement} : </Text>
                    <Text style={styles.content}>{this.props.announcement}</Text>
                    </Body>
                </CardItem>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        color : '#3F51B5' ,
        fontFamily : 'JF Flat' ,
        fontSize : 16
    },
    content : {
        marginTop : 6 ,
        fontFamily : 'JF Flat' ,
        fontSize : 14 ,
        textAlign :  'left' ,
    }
});