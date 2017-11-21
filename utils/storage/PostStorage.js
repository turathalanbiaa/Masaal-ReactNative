import {AsyncStorage} from 'react-native';

const STORE = "@POST";
const MAX = 500;

export default class PostStorage
{

    static async savePost(post)
    {
        return new Promise(async (resolve, reject) =>
        {
            let count = await PostStorage.count();
            if (count >= MAX)
            {
                reject();
            }
            else
            {
                let key = STORE + ":" + post.id;
                AsyncStorage.setItem(key, JSON.stringify(post)).then(() =>
                {
                    resolve();
                }).catch(() =>
                {
                    reject();
                });
            }
        })
    }

    static async count()
    {
        let keys = await AsyncStorage.getAllKeys();
        return keys.length;
    }

    static async getPosts()
    {
        let keys = await AsyncStorage.getAllKeys();
        let postsAsString = await AsyncStorage.multiGet(keys);
        let posts = [];

        for(let i=0;i<posts.length;i++)
        {
            posts.push(JSON.parse(postsAsString[i]));
        }

        return posts;
    }

    static async getPost(id)
    {
        let key = STORE + ":" + id;
        let post = await AsyncStorage.getItem(key);
        if(post !== null)
        {
            return JSON.parse(post);
        }

        return null;
    }

    static async getKeys()
    {
        let allKeys = await AsyncStorage.getAllKeys();
        let keys = [];

        for(let i=0;i<allKeys.length;i++)
            if(allKeys[i].includes(STORE))
                keys.push(allKeys[i]);

        return keys;
    }

    static remove(id)
    {
        let key = STORE + ":" + id;
        AsyncStorage.removeItem(key);
    }

}