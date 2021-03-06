import React , {Component} from 'react';
import {View , ScrollView , StyleSheet , Dimensions , Image} from 'react-native';
import DrawerItem from "./DrawerItem";
import String from './../../../res/string/String';

export default class Drawer extends Component
{

    render()
    {
        const {width} = Dimensions.get('window');
        return (
            <View style={[styles.container , this.props.style]}>
                <Image source={require('./../../../res/image/images/drawer_header.jpg')} style={{width : '100%' , height : (width*0.80)*0.54}}/>

                <ScrollView style={{flex : 1 , marginTop : 2}}>

                    <DrawerItem iconName="md-cube" title={String.feqh_questions} screenIndex={0} screen="Home" params={{type : 1}} navigation={this.props.navigation}/>
                    <DrawerItem iconName="md-cube" title={String.aqaed_questions} screenIndex={1} screen="Home" params={{type : 2}} navigation={this.props.navigation}/>

                    <DrawerItem iconName="md-send" title={String.send_question} screenIndex={2} screen="SendQuestion" navigation={this.props.navigation}/>

                    <DrawerItem iconName="md-document" title={String.feqh_posts} screenIndex={3} screen="Posts" params={{type : 1}} navigation={this.props.navigation}/>
                    <DrawerItem iconName="md-document" title={String.aqaed_posts} screenIndex={4} screen="Posts" params={{type : 2}} navigation={this.props.navigation}/>

                    <DrawerItem iconName="md-archive" title={String.my_questions} screenIndex={5} screen="MyQuestions" navigation={this.props.navigation}/>
                    <DrawerItem iconName="md-search" title={String.search} screenIndex={6} screen="Search" navigation={this.props.navigation}/>

                    <DrawerItem iconName="md-bookmark" title={String.question_bookmark} screenIndex={7} screen="QuestionBookmark" navigation={this.props.navigation}/>
                    <DrawerItem iconName="md-bookmark" title={String.post_bookmark} screenIndex={7} screen="PostBookmark" navigation={this.props.navigation}/>

                    <DrawerItem iconName="md-pricetag" title={String.tags} screenIndex={8} screen="Tags" navigation={this.props.navigation}/>
                    <DrawerItem iconName="md-settings" title={String.settings} screenIndex={9} screen="Settings" navigation={this.props.navigation}/>

                </ScrollView>

            </View>
        )
    }

}

Drawer.defaultProps = {
    style : {}
};


const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : '#2B2B2B' ,
        elevation : 4
    }
});