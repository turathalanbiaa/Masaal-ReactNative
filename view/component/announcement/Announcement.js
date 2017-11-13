import React , {Component} from 'react';
import {View} from 'react-native';
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
                    <Text style={{color : '#3F51B5' , fontFamily : 'JF Flat' , fontSize : 16}}>{String.announcement} : </Text>
                    <Text style={{marginTop : 6 , fontFamily : 'JF Flat' , fontSize : 14}}>{this.props.announcement}</Text>
                    </Body>
                </CardItem>
            </View>
        )
    }

}