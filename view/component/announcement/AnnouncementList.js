import React , {Component} from 'react';
import {FlatList , View} from 'react-native';
import Announcement from "./Announcement";

export default class AnnouncementList extends Component
{

    render()
    {
        return(
            <View style={{padding : 6}}>
                <FlatList
                    style={{marginTop : 8}}
                    data={this.props.announcements}
                    renderItem={(item) =>
                    {
                        return <Announcement announcement={item.item.content}/>;
                    }}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => null}
                    ListHeaderComponent={() => null}
                    ListFooterComponent={() => null}
                    onEndReached={this.props.onEndReached}
                    onEndThreshold={0}
                />
            </View>
        )
    }

}