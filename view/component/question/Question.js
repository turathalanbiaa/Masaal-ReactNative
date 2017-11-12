import React, {Component , PureComponent} from 'react';
import {View , StyleSheet , Image , Dimensions} from 'react-native';
import QuestionStatus from "../../../enum/QuestionStatus";
import String from '../../../res/string/String';
import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import QuestionActions from "./QuestionActions";
import Divider from './../general/Divider';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Link from './../../../constant/Link';


export default class Question extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {};
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
                    <QuestionActions onCapturePressed={this.onCapturePressed} videoLink={question.videoLink} externalLink={question.externalLink}/>
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