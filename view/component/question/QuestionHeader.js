import React , {Component} from 'react';
import {StyleSheet , View , Text , Image} from 'react-native';
import TimeUtils from './../../../utils/time/TimeUtils';

export default class QuestionHeader extends Component
{

    render()
    {
        const time = TimeUtils.timeSince(new Date(this.props.time));

        return (
            <View style={styles.container}>

                <View>
                    <Image source={require('./../../../res/image/icon/user.png')} style={styles.image}/>
                </View>

                <View style={styles.infoContainer}>

                    <Text style={styles.primaryText}>{this.props.name}</Text>

                    <View style={styles.infoFooterContainer}>
                        <Text style={styles.secondaryText}>{time}</Text>
                        <Text style={styles.secondaryText}>{this.props.category}</Text>
                    </View>

                </View>

            </View>
        );
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
        marginLeft : 8 , marginRight : 8
    },
    primaryText : {
        fontSize : 16
    },
    secondaryText : {
        fontSize : 12
    }
});