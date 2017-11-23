import React from 'react';
import {View , I18nManager} from 'react-native';
import Screen from './Screen';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import TagList from "../component/tag/TagList";
import {getTags} from "../../redux/actions/tagActions";


class Tag extends Screen
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        I18nManager.forceRTL(false);
        this.props.dispatch(getTags(this.props.requestId));
    }


    _onRefresh = () =>
    {
        this.props.dispatch(getTags(this.props.requestId));
    };


    renderContent()
    {
        return (
            <View style={{flex: 1}}>

                <TagList
                    tags={this.props.tags}
                    navigation={this.props.navigation}
                    refreshing={this.props.fetching}
                    header={null}
                    onRefresh={this._onRefresh}
                    firstError={this.props.fetchingError && this.props.tags.length === 0}
                    moreError={this.props.fetchingError && this.props.tags.length > 0}
                />

            </View>
        )
    }

    title = ()=>
    {
        return String.tags;
    }

}

export default connect((state) => {
    return {
        fetching: state.tag.fetching,
        fetchingError: state.tag.fetchingError,
        tags: state.tag.tags,
        requestId: state.tag.requestId
    }
})(Tag)