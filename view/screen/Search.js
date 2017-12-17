import React from 'react';
import { View} from 'native-base';
import Screen from './Screen';
import String from './../../res/string/String';
import {Content , Container , Item , Input , Text , Button , Form , Spinner , Toast} from 'native-base';
import {connect} from 'react-redux';
import FeqhCategoryPicker from "../component/question/FeqhCategoryPicker";
import AqeadCategoryPicker from "../component/question/AqeadCategoryPicker";
import QuestionTypeRadio from "../component/question/QuestionTypeRadio";
import Setting from "../../constant/Setting";

let opening = false;

class Search extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {text : '' , type : 1 , category : null};
    }

    onCategoryChanged = (value) =>
    {
        this.setState({category : value});
    };


    search = () =>
    {
        console.log(opening);

        if (opening)
            return;

        opening = true;

        if(this.state.category === null && this.state.text === "")
        {
            return;
        }

        let {navigate} = this.props.navigation;
        navigate('SearchResult' , {text : this.state.text , category : this.state.category});

        setTimeout(() => {opening = false} , 1000);

    };



    renderContent()
    {

        return (
            <Container>
                <Content style={{padding : 8}}>

                    <Form>

                        <Item>
                            <Input
                                placeholder={String.search}
                                onChangeText={(text) => this.setState({text : text})}
                                style={{textAlign : Setting.isRTL() ? 'right' : 'left'}}
                                autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true}/>
                        </Item>

                        <QuestionTypeRadio thirdOption={false} onPress={(value) => {this.setState({type:value , category : null})}}/>

                        {
                            this.state.type === 0 ? null : (this.state.type === 1 ?
                                <FeqhCategoryPicker  onValueChange={this.onCategoryChanged} selectedValue={this.state.category}/>
                                :
                                <AqeadCategoryPicker onValueChange={this.onCategoryChanged} selectedValue={this.state.category}/>)
                        }

                    </Form>

                    <Button full rounded onPress={this.search} style={{marginTop : 20}}><Text>{String.search}</Text></Button>

                </Content>
            </Container>
        )
    }


    title = () =>
    {
        return String.search;
    }
}

export default connect((store) =>
{
    return {
        sending : store.sendQuestionReducer.sending,
        complete : store.sendQuestionReducer.complete ,
        success : store.sendQuestionReducer.success
    }
})(Search)