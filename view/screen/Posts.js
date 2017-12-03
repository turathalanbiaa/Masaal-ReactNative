import React from 'react';
import {View, I18nManager} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import Screen from './Screen';
import {fetchRecentPosts} from "../../redux/actions/postActions";
import PostList from "../component/post/PostList";
import Setting from "../../constant/Setting";
import JSHelper from "../../utils/JSHelper";


class Posts extends Screen
{

    componentDidMount()
    {
        this.loadPosts();
    }

    _onRefresh = () =>
    {
        this.loadPosts();
    };

    _onEndReached = () =>
    {
        if (this.props.fetching || this.props.fetchingMore || this.props.newCount === 0)
        {
            return;
        }

        this.loadPosts(this.props.posts.length);
    };


    loadPosts = (offset = 0) =>
    {
        let type = JSHelper.getScreenParams(this.props.navigation , "type" , 1);
        let lang = Setting.getCurrentLanguage();
        this.props.dispatch(fetchRecentPosts(lang , type , offset, this.props.requestId));
    };

    renderContent()
    {
        return (
            <View style={{flex: 1}}>

                <PostList
                    posts={this.props.posts}
                    refreshing={this.props.fetching}
                    header={null}
                    onRefresh={this._onRefresh}
                    onEndReached={this._onEndReached}
                    firstError={this.props.fetchingError && this.props.posts.length === 0}
                    moreError={this.props.fetchingError && this.props.posts.length > 0}
                />

            </View>
        )
    }

    title = () =>
    {
        let type = JSHelper.getScreenParams(this.props.navigation , "type" , 1);
        return type === 1 ? String.feqh_posts : String.aqaed_posts;
    }


}

export default connect((state) =>
{
    return {
        fetching: state.post.fetching,
        fetchingError: state.post.fetchingError,
        fetchingMore: state.post.fetchingMore,
        posts: state.post.posts,
        newCount : state.post.newCount,
        requestId: state.post.requestId
    }
})(Posts);
