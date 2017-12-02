import React, {Component} from 'react';
import {View , TouchableOpacity, StyleSheet} from 'react-native';
import {Icon, Text} from 'native-base';
import {NavigationActions} from 'react-navigation';


export default class DrawerItem extends Component
{

    onPressed = () =>
    {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: this.props.screen , params : this.props.params}),
            ]
        });

        this.props.navigation.dispatch(resetAction)

    };

    render()
    {
        return (
            <TouchableOpacity onPress={this.onPressed}>
                <View style={styles.container}>
                    <Icon style={{color : '#FFFFFF' , fontSize : 18 , marginLeft: 12}} name={this.props.iconName}/>
                    <Text style={{marginLeft: 18 , fontSize: 16 , color : '#FFFFFF'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }



}


const styles = StyleSheet.create({
    container: {
        flexDirection : 'row' ,
        marginBottom : 4 ,
        paddingBottom : 8 ,
        paddingTop : 8 ,
        backgroundColor : '#454545',
        alignItems : 'center',
    }
});