import React , {Component} from 'react';
import {Picker} from 'react-native';
import String from './../../../res/string/String';


export default class FeqhCategoryPicker extends Component
{

    render()
    {
        return (
            <Picker
                iosHeader={String.select_category}
                mode="dropdown"
                selectedValue={this.props.selectedValue}
                onValueChange={this.props.onValueChange}
            >

                <Picker.Item label={String.no_category} value={null} />
                <Picker.Item label={String.salah} value={7} />
                <Picker.Item label={String.soum} value={6} />
                <Picker.Item label={String.zakah} value={8} />
                <Picker.Item label={String.hij} value={9} />
                <Picker.Item label={String.kumos} value={10} />
                <Picker.Item label={String.amor} value={11} />
                <Picker.Item label={String.nahi} value={12} />
                <Picker.Item label={String.tawlly} value={13} />
                <Picker.Item label={String.tabry} value={14} />

            </Picker>

        );
    }

}