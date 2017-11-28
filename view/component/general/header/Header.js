import React , {Component} from 'react';
import {Header as NBHeader , Left , Button , Icon , Body , Title , Right} from 'native-base';


export default class Header extends Component
{

    render()
    {
        return (
            <NBHeader style={{backgroundColor : '#3F51B5'}}>

                <Left>
                    {
                        this.props.left === null ? <Button onPress={this.props.onDrawer} transparent><Icon style={{color : '#FFFFFF'}} name='menu'/></Button> : this.props.left
                    }
                </Left>

                <Body><Title style={{color : '#FFFFFF'}}>{this.props.title}</Title></Body>

                <Right>{this.props.right}</Right>

            </NBHeader>
        )
    }
}

Header.defaultProps = {
    right : null ,
    left : null ,
    onDrawer : () => {}
};