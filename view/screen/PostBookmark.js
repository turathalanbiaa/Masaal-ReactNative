import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import String from './../../res/string/String';
import Screen from './Screen';
import {getBookmark} from "../../redux/actions/postActions";
import PostList from "../component/post/PostList";

class PostBookmark extends Screen
{

    componentDidMount()
    {
        this.props.dispatch(getBookmark(this.props.requestId));
    }

    _onRefresh = () =>
    {
        this.props.dispatch(getBookmark(this.props.requestId));
    };

    renderContent()
    {
        console.log(this.props.posts);

        return (
            <View style={{flex: 1}}>

                <PostList
                    posts={this.props.posts}
                    refreshing={this.props.fetching}
                    header={null}
                    onRefresh={this._onRefresh}
                    firstError={this.props.fetchingError && this.props.posts.length === 0}
                    moreError={this.props.fetchingError && this.props.posts.length > 0}
                />

            </View>
        )
    }

    title = () =>
    {
        return String.post_bookmark;
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
})(PostBookmark);
