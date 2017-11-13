import React , {Component} from 'react';
import {Container , Drawer as NSDrawer} from 'native-base';
import Header from "../component/general/header/Header";
import Drawer from './../component/drawer/Drawer';

export default class Screen extends Component
{
    constructor(props)
    {
        super(props);
    }

    closeDrawer = () =>
    {
        this.drawer._root.close()
    };

    openDrawer = () =>
    {
        this.drawer._root.open()
    };

    render()
    {
        return (
            <NSDrawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Drawer navigation={this.props.navigation}/>}
                onClose={() => this.closeDrawer()} >

                <Container>

                    <Header title={this.title()} onDrawer={this.openDrawer}/>

                    {
                        this.renderContent()
                    }

                </Container>

            </NSDrawer>
        )
    }
}