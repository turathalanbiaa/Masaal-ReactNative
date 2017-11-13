import {AsyncStorage} from 'react-native';

const STORE = "@QUESTION";
const MAX = 500;

export default class QuestionStorage
{

    static async saveQuestion(question)
    {
        return new Promise(async (resolve, reject) =>
        {
            let count = await QuestionStorage.count();
            if (count >= MAX)
            {
                reject();
            }
            else
            {
                let key = STORE + ":" + question.id;
                AsyncStorage.setItem(key, JSON.stringify(question)).then(() =>
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

    static async getQuestions()
    {
        let keys = await AsyncStorage.getAllKeys();
        let questionsAsString = await AsyncStorage.multiGet(keys);
        let questions = [];

        for(let i=0;i<questions.length;i++)
        {
            questions.push(JSON.parse(questionsAsString[i]));
        }

        return questions;
    }

    static async getQuestion(id)
    {
        let key = STORE + ":" + id;
        let question = await AsyncStorage.getItem(key);
        return JSON.parse(question);
    }

    static remove(id)
    {
        let key = STORE + ":" + id;
        AsyncStorage.getItem(key);
    }

}