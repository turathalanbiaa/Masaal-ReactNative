export default class JSHelper
{
    static getScreenParams(navigation , targetObject , defaultReturn = null)
    {
        let {state} = navigation;
        let params = state.params === undefined ? {} : state.params;
        return params[targetObject] === undefined ? defaultReturn : params[targetObject];
    }
}