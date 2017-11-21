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
        return JSON.parse(post);
    }

    static remove(id)
    {
        let key = STORE + ":" + id;
        AsyncStorage.getItem(key);
    }

}