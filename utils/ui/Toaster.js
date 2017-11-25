import {Toast} from 'native-base';

export default class Toaster
{
    static show(message , type='info' , duration=3000)
    {
        Toast.show({
            text: message,
            type: type,
            position: 'bottom',
            duration: duration
        });
    }
}