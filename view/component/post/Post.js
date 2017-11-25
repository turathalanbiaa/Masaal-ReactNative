import React, {Component , PureComponent} from 'react';
import {View , StyleSheet , Image , Dimensions , Text} from 'react-native';
import {H3} from 'native-base';
import {Toast} from 'native-base';
import String from '../../../res/string/String';
import PostHeader from "./PostHeader";
import PostsActions from "./PostActions";
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Link from './../../../constant/Link';
import Share from 'react-native-share';
import PostStorage from "../../../utils/storage/PostStorage";
import Divider from "../general/Divider";

export default class Post extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {bookmark : this.props.post.bookmark};
    }

    onCapturePressed = () =>
    {
        this.viewShot.capture().then(uri =>
        {
            console.log("image saved ", uri);

            let destination = RNFS.DocumentDirectoryPath + "/" + "p_" + this.props.post.id + ".jpg";
            RNFS.moveFile(uri , destination).then(() =>
            {
                console.log('moved to : ' + destination);
            });

        });
    };

    onSharePressed = () =>
    {
        let shareOptions = {
            title: String.app_name,
            message: this.props.post.content,
            url: "",
            subject: String.app_name
        };

        Share.open(shareOptions);
    };

    onBookmarkPressed = () =>
    {
        if(!this.state.bookmark)
        {
            PostStorage.savePost(this.props.post).catch(() =>
            {
                Toast.show({
                    text: String.you_cannot_save_more_than_500_posts,
                    position: 'bottom',
                    type: 'danger' ,
                    duration : 3000
                })
            });
            this.setState({bookmark : true});
        }
        else
        {
            PostStorage.remove(this.props.post.id);
            this.setState({bookmark : false});
        }
    };

    render()
    {

        const {width} = Dimensions.get('window');
        const {post} = this.props;

        return (
            <ViewShot ref={ref => this.viewShot = ref} options={{ format: "jpg", quality: 0.9 }}>

                <View style={styles.container}>

                    <PostHeader time={post.time}/>

                    <H3 style={styles.topDownSpace}>{post.title}</H3>
                    <Divider/>

                    <Text style={[styles.topDownSpace , styles.paragraph]}>{post.content.trim()}</Text>

                    {
                        (post.image !== null && post.image.trim() !== "")
                        && <Image source={{uri : Link.IMAGES + post.image}} style={{width : '100%' , height : width*0.7 , marginBottom : 8}}/>
                    }

                    <PostsActions
                        bookmark={this.state.bookmark}
                        onBookmarkPressed={this.onBookmarkPressed}
                        onCapturePressed={this.onCapturePressed}
                        onSharePressed={this.onSharePressed}
                    />

                </View>

            </ViewShot>

        );
    }

}

const styles = StyleSheet.create({
    container :{
        padding : 8,
        paddingBottom : 2,
        backgroundColor : '#FFF' ,
        marginBottom : 20,
        marginTop : 8
    },
    topDownSpace : {
        marginTop : 8 , marginBottom : 8
    },
    paragraph : {
        fontSize: 14 ,
        color : '#777777' ,
        fontFamily : 'JF Flat',
    }
});