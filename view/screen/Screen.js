import React , {Component} from 'react';
import {Container , Drawer as NSDrawer , Button , Icon} from 'native-base';
import Header from "../component/general/header/Header";
import Drawer from './../component/drawer/Drawer';
import Setting from "../../constant/Setting";
import {NavigationActions} from 'react-navigation'
export default class Screen extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {open : false}
    }

    closeDrawer = () =>
    {
        this.setState({open : false});
        this.drawer._root.close()
    };

    openDrawer = () =>
    {
        console.log(this.drawer);
        this.setState({open : true});
        this.drawer._root.open()
    };

    render()
    {

        const right = this.backButton() ? <Button onPress={() => {this.props.navigation.dispatch(NavigationActions.back())}} transparent><Icon style={{color : '#FFFFFF'}} name={Setting.isRightLayout()? 'md-arrow-back' : 'md-arrow-forward'}/></Button>:null;

        return (
            <NSDrawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Drawer style={{opacity : this.state.open ? 1.0 : 0.0}} navigation={this.props.navigation}/>}
                onClose={() => this.closeDrawer()} >

                <Container>

                    <Header title={this.title()}
                            onDrawer={this.openDrawer}
                            right={right}/>
                    {
                        this.renderContent()
                    }
                </Container>

            </NSDrawer>
        )
    }

    backButton = () => false
}