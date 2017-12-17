import React , {Component} from 'react';
import {FlatList , View , Image , StyleSheet , Text , TouchableOpacity} from 'react-native';
import {Button , Text as NBText , ListItem} from 'native-base'
import String from './../../../res/string/String';

let opening = false;
export default class TagList extends Component
{

    constructor(props)
    {
        super(props);
    }

    showTags = (tagId) =>
    {
        if (opening)
            return;
        opening = true;

        const {navigate} = this.props.navigation;
        navigate('SearchResult' , {tagId : tagId});

        setTimeout(() => {
            opening = false;
        } , 2000);
    };

    render()
    {

        return (

            <View style={{flex : 1}}>

                {this.renderLoadingIfLoading()}
                {this.renderErrorIfError()}
                {this.renderEmptyIfEmpty()}

                {
                    !this.props.firstError &&
                    <FlatList
                        data={this.props.tags}
                        renderItem={(item) =>
                        {
                            return <View key={item.item.id} style={styles.listItem}><TouchableOpacity onPress={() => this.showTags(item.item.id)}><NBText style={styles.item}>{item.item.tag}</NBText></TouchableOpacity></View>;
                        }}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => null}
                        ListHeaderComponent={() => this.props.header}
                        ListFooterComponent={() => null}
                        refreshing={this.props.refreshing}
                        onRefresh={this.props.onRefresh}
                        onEndReached={this.props.onEndReached}
                        onEndThreshold={0}
                    />
                }

            </View>
        )
    }

    renderLoadingIfLoading = () =>
    {
        return (
            this.props.refreshing &&
            <View style={styles.messageContainer}>
                <Image resizeMode="stretch" source={require('./../../../res/image/icon/cloud.png')} style={styles.image} />
                <Text style={styles.messageText}>{String.loading}</Text>
            </View>
        )
    };

    renderErrorIfError = () =>
    {
        return (
            this.props.firstError &&
            <View style={styles.messageContainer}>
                <Image resizeMode="stretch" source={require('./../../../res/image/icon/cloud_fail.png')} style={[styles.image , {width : 110}]} />
                <Text style={styles.messageText}>{String.error_while_loading}</Text>
                <Button onPress={this.props.onRefresh} style={{alignSelf : 'center'}}><NBText style={styles.reloadButtonText}>{String.reload}</NBText></Button>
            </View>
        )
    };

    renderEmptyIfEmpty = () =>
    {
        return (
            (this.props.tags.length === 0 && !this.props.firstError && !this.props.refreshing) &&
            <View style={styles.messageContainer}>
                <Image resizeMode="stretch" source={require('./../../../res/image/icon/packing.png')} style={styles.image} />
                <Text style={styles.messageText}>{String.empty_result}</Text>
            </View>
        )
    };

}

const styles = StyleSheet.create({
    image : {
        marginTop : 50 ,
        width : 76 ,
        height : 76 ,
        alignSelf : 'center',
        marginBottom : 10
    },
    messageContainer : {
        justifyContent: 'center' ,
        alignItems : 'center'
    },
    messageText : {
        fontFamily : 'JF Flat' ,
        marginBottom: 8
    },
    reloadButtonText : {
        fontFamily: 'JF Flat'
    },
    listItem : {
        backgroundColor : '#FFFFFF' ,
        padding : 12 ,
        marginBottom : 2,
        marginTop : 2
    },
    item : {
        fontFamily : 'JF Flat',
        fontSize : 18
    }
});