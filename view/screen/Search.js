import React from 'react';
import { View} from 'native-base';
import Screen from './Screen';
import String from './../../res/string/String';
import {Content , Container , Item , Input , Text , Button , Form , Spinner , Toast} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import FeqhCategoryPicker from "../component/question/FeqhCategoryPicker";
import AqeadCategoryPicker from "../component/question/AqeadCategoryPicker";

const type_radio_props = [
    {label: String.none , value: 0 },
    {label: String.feqh , value: 1 },
    {label: String.aqaed , value: 2 }
];


class Search extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {text : '' , type : 0 , category : null};
    }

    onCategoryChanged = (value) =>
    {
        console.log(value);
        this.setState({category : value});
    };


    search = () =>
    {
        if(this.state.category === null && this.state.text === "")
        {
            return;
        }

        let {navigate} = this.props.navigation;
        navigate('SearchResult' , {text : this.state.text , category : this.state.category});

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
                                autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true}/>
                        </Item>

                        <View style={{marginTop : 18 , marginLeft: 12 , marginRight : 12 , alignItems : 'flex-start'}}>
                            <Text>Type Of Question</Text>
                            <RadioForm
                                style={{alignItems : 'flex-start' , marginTop : 6}}
                                radio_props={type_radio_props}
                                initial={0}
                                onPress={(value) => {this.setState({type:value , category : null})}}
                            />
                        </View>

                        {
                            this.state.type === 0 ? null : (this.state.type === 1 ?
                                <FeqhCategoryPicker  onValueChange={this.onCategoryChanged} selectedValue={this.state.category}/>
                                :
                                <AqeadCategoryPicker onValueChange={this.onCategoryChanged} selectedValue={this.state.category}/>)
                        }

                    </Form>

                    <Button full rounded onPress={this.search} style={{marginTop : 20}}><Text>{String.send}</Text></Button>

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