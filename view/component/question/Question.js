import React, {Component , PureComponent} from 'react';
import {View , StyleSheet , Image , Dimensions} from 'react-native';
import {Toast} from 'native-base';
import QuestionStatus from "../../../enum/QuestionStatus";
import String from '../../../res/string/String';
import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import QuestionActions from "./QuestionActions";
import Divider from './../general/Divider';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Link from './../../../constant/Link';
import Share from 'react-native-share';
import QuestionStorage from "../../../utils/storage/QuestionStorage";

export default class Question extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {bookmark : this.props.question.bookmark};
    }

    onCapturePressed = () =>
    {
        this.viewShot.capture().then(uri =>
        {
            console.log("image saved ", uri);

            let destination = RNFS.DocumentDirectoryPath + "/" + this.props.question.id + ".jpg";
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
            message: this.props.question.content + "\n" + "____________________" + "\n" + this.props.question.answer,
            url: "",
            subject: String.app_name
        };

        Share.open(shareOptions);
    };

    onBookmarkPressed = () =>
    {
        if(!this.state.bookmark)
        {
            QuestionStorage.saveQuestion(this.props.question).catch(() =>
            {
                Toast.show({
                    text: String.you_cannot_save_more_than_500_questions,
                    position: 'bottom',
                    type: 'danger' ,
                    duration : 3000
                })
            });

            this.setState({bookmark : true});
        }
        else
        {
            QuestionStorage.remove(this.props.question.id);
            this.setState({bookmark : false});
        }
    };

    render()
    {
        const {question} = this.props;
        return (
            <ViewShot ref={ref => this.viewShot = ref} options={{ format: "jpg", quality: 0.9 }}>

                <View style={styles.container}>

                    <QuestionHeader name={question.userDisplayName} category={question.category} time={question.time}/>
                    <QuestionText style={styles.topDownSpace} content={question.content} title={String.the_question}/>

                    {
                        question.status === QuestionStatus.APPROVED ? this.renderAnswer() : null
                    }

                    <QuestionActions
                        onBookmarkPressed={this.onBookmarkPressed}
                        onCapturePressed={this.onCapturePressed}
                        onSharePressed={this.onSharePressed}
                        bookmark={this.state.bookmark}
                        videoLink={question.videoLink}
                        externalLink={question.externalLink}/>

                </View>

            </ViewShot>

        );
    }

    renderAnswer = () =>
    {
        const {question} = this.props;
        const {width} = Dimensions.get('window');
        return (
            <View>
                <Divider/>
                <QuestionText style={styles.topDownSpace} content={question.answer}  title={String.the_answer}/>
                {
                    (question.image !== null && question.image.trim() !== "") && <Image source={{uri : Link.IMAGES + question.image}} style={{width : '100%' , height : width*0.7 , marginBottom : 8}}/>
                }
            </View>
        )
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
    }
});