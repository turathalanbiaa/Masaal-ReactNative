import React , {Component} from 'react';
import {StyleSheet , View , Text , Image , I18nManager} from 'react-native';
import TimeUtils from './../../../utils/time/TimeUtils';
import String from './../../../res/string/String';

export default class QuestionHeader extends Component
{

    render()
    {

        let name = this.props.name;
        if (name === null || name.trim() === "")
            name = String.unknown_user;
        name = name.substr(0 , 19);

        return (
            <View style={styles.container}>

                <View>
                    <Image source={require('./../../../res/image/icon/user.png')} style={styles.image}/>
                </View>

                <View style={styles.infoContainer}>

                    <Text style={styles.primaryText}>{name}</Text>

                    <View style={styles.infoFooterContainer}>
                        <Text style={styles.secondaryText}>{this.formattedTime()}</Text>
                        <Text style={styles.secondaryText}>{this.props.category}</Text>
                    </View>

                </View>

            </View>
        );
    }

    formattedTime = () =>
    {
        let time = TimeUtils.timeSince(new Date(this.props.time));
        time = time.replace("$years$" , String.year);
        time = time.replace("$month$" , String.month);
        time = time.replace("$days$" , String.day);
        time = time.replace("$hours$" , String.hour);
        time = time.replace("$minutes$" , String.minute);
        time = time.replace("$seconds$" , String.second);

        if (time.includes('NaN'))
            return '';

        return time;
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'row'
    },
    infoContainer : {
        flex : 1 ,
        flexDirection : 'column'
    },
    infoFooterContainer : {
        flex : 1 ,
        flexDirection : 'row' ,
        justifyContent: 'space-between'
    },
    image :{
        width : 32 ,
        height : 32 ,
        marginRight : 8
    },
    primaryText : {
        fontSize : 13 ,
        marginBottom : 6,
        fontFamily : 'JF Flat',
        textAlign : 'left',
    },
    secondaryText : {
        fontSize : 12,
        fontFamily : 'JF Flat'
    }
});