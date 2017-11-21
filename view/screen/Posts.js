import React from 'react';
import {View, I18nManager} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import Screen from './Screen';
import {fetchRecentPosts} from "../../redux/actions/postActions";
import PostList from "../component/post/PostList";


class Posts extends Screen
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        I18nManager.forceRTL(false);
        this.props.dispatch(fetchRecentPosts(0, this.props.requestId));
    }

    _onRefresh = () =>
    {
        this.props.dispatch(fetchRecentPosts(0, this.props.requestId));
    };

    _onEndReached = () =>
    {
        if (this.props.fetching || this.props.fetchingMore)
        {
            return;
        }

        this.props.dispatch(fetchRecentPosts(this.props.posts.length, this.props.requestId))
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
        return String.feqh_posts;
    }


}

export default connect((state) =>
{
    return {
        fetching: state.post.fetching,
        fetchingError: state.post.fetchingError,
        fetchingMore: state.post.fetchingMore,
        posts: state.post.posts,
        requestId: state.post.requestId
    }
})(Posts);
