import LocalizedStrings from 'react-native-localization';

let String = new LocalizedStrings({
    ar: {
        the_question: 'السؤال : ',
        the_answer: 'الجواب : ' ,
        unknown_user : 'مستخدم غير معروف' ,
        year : "سنة",
        month : "شهر" ,
        day : "يوم",
        hour : "ساعة",
        minute : "دقيقة",
        second : "ثانية",
        home : "الرئيسية",
        error_while_loading : 'حصلت مشكلة خلال تحميل البيانات',
        empty_result : 'لا توجد بيانات',
        loading_questions : 'جاري تحميل الاسئلة...',
        reload : "اعادة تحميل"
    },
    en: {
        the_question: 'Question : ',
        the_answer: 'Answer : ',
        unknown_user : 'Unknown User' ,
        year : "year",
        month : "month" ,
        day : "day",
        hour : "hour",
        minute : "minute",
        second : "second" ,
        home : "Home",
        error_while_loading : 'Error Happened While Loading',
        empty_result : 'No Result',
        loading_questions : 'Loading Questions...',
        reload : 'Reload'
    },
    fr : {

    }

});

export default String;
