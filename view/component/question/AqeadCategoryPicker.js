import React , {Component} from 'react';
import {Picker} from 'react-native';
import String from './../../../res/string/String';


export default class AqeadCategoryPicker extends Component
{

    render()
    {
        return (
            <Picker
                selectedValue={this.props.selectedValue}
                onValueChange={this.props.onValueChange}
            >

                <Picker.Item label={String.no_category} value={null} />
                <Picker.Item label={String.twheed} value={1} />
                <Picker.Item label={String.adel} value={2} />
                <Picker.Item label={String.nibwa} value={3} />
                <Picker.Item label={String.imama} value={4} />
                <Picker.Item label={String.maad} value={5} />

            </Picker>

        );
    }

}