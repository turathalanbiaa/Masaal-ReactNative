import React, {Component} from 'react';
import {View , StyleSheet} from 'react-native';
import QuestionStatus from "../../../enum/QuestionStatus";
import String from '../../../res/string/String';
import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import QuestionActions from "./QuestionActions";
import Divider from './../general/Divider';

export default class Question extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const {question} = this.props;
        return (
            <View style={styles.container}>
                <QuestionHeader name={question.userDisplayName} category={question.category} time={question.time}/>
                <QuestionText style={styles.topDownSpace} content={question.content} title={String.the_question}/>
                {
                    question.status === QuestionStatus.APPROVED ? this.renderAnswer() : null
                }
            </View>

        );
    }

    renderAnswer = () =>
    {
        const {question} = this.props;
        return (
            <View>
                <Divider/>
                <QuestionText style={styles.topDownSpace} content={question.answer}  title={String.the_answer}/>
                <QuestionActions videoLink={question.videoLink} externalLink={question.externalLink}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        padding : 8
    },
    topDownSpace : {
        marginTop : 8 , marginBottom : 8
    }
});