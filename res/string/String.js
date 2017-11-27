import Setting from "../../constant/Setting";

let lang = {
    "ar": {
        the_question: 'السؤال : ',
        the_answer: 'الجواب : ',
        unknown_user: 'مستخدم غير معروف',
        year: "سنة",
        month: "شهر",
        day: "يوم",
        hour: "ساعة",
        minute: "دقيقة",
        second: "ثانية",
        home: "الرئيسية",
        error_while_loading: 'حصلت مشكلة خلال تحميل البيانات',
        empty_result: 'لا توجد بيانات',
        loading_questions: 'جاري تحميل الاسئلة...',
        reload: "اعادة تحميل",
        app_name: "الاجوبة المسيرة",
        announcement: 'اعلان مثبت',
        you_cannot_save_more_than_500_questions: 'لا يمكنك حفظ اكثر من ٥٠٠ سؤال',
        you_cannot_save_more_than_500_posts: 'لا يمكنك حفظ اكثر من ٥٠٠ منشور',

        feqh_questions: "الاسئلة الافقهية",
        aqaed_questions: "الاسئلة العقائدية",
        feqh_posts: "المنشورات الافقهية",
        aqaed_posts: "المنشورات العقائدية",
        send_question: "ارسال سؤال",
        my_questions: "اسئلتي",
        search: "بحث",
        bookmark: "المحفوضات",
        tags: "الاستفتائات",
        settings: "الاعدادات",

        write_your_question: 'اكتب سؤالك',
        what_is_your_question: 'ما هو سؤالك ؟',
        send: "ارسال",
        feqhi: 'فقهي',
        aqaedi: 'عقائدي',
        i_dont_know: 'لا اعرف',
        public: 'عام',
        private: 'خاص',
        privacy: 'الخصوصية',

        question_sent: 'تم ارسال السؤال',
        question_didnot_sent: 'لم يتم ارسال السؤال , حاول مرة اخرى',
        question_length_must_be_more_than_10_letters: 'طول السوال يجب ان يكون اكثر من ١٠ حروف',

        general_posts: 'منشورات عامة',
        loading_posts: 'جاري تحميل المنشورات...',

        salah: 'الصلاة',
        soum: 'الصوم',
        zakah: 'الزكاة',
        hij: 'الحج',
        kumos: 'الخمس',
        amor: 'الامر بالمعروف',
        nahi: 'النهي عن المنكر',
        tawlly: 'التولي لأولياء الله',
        tabry: 'التبري من اعداء الله',

        twheed: 'التوحيد',
        adel: 'العدل',
        nibwa: 'النبوة',
        imama: 'امامة',
        maad: 'المعاد',

        select_category: 'اختر تصنيف',
        no_category: 'بدون تصنيف',
        none: 'بدون',

        feqh: 'فقه',
        aqaed: 'عقائد',

        search_result: 'نتائج البحث',
        loading: 'جاري التحميل...',
        type_of_question: 'نوع السؤال',

        arabic: 'عربي',
        english: 'English',
        french: 'French',

        choose_language: 'اختر اللغة',
        change: 'تغير',
        name_empty: "الاسم فارغ",
        name_has_been_changed: "تم تغير الاسم",
        name_didnot_changed_check_your_internet_connection: "لم يتم تغير الاسم ، تحقق من الاتصال بالانترنت",

        new_user: 'مستخدم جديد'

    },
    "en": {
        the_question: 'Question : ',
        the_answer: 'Answer : ',
        unknown_user: 'Unknown User',
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
        home: "Home",
        error_while_loading: 'Error Happened While Loading',
        empty_result: 'No Result',
        loading_questions: 'Loading Questions...',
        reload: 'Reload',
        app_name: "Simple Answers",
        announcement: 'Fixed Announcement',
        you_cannot_save_more_than_500_questions: 'You cannot save more than 500 questions',
        you_cannot_save_more_than_500_posts: 'You cannot save more than 500 posts',

        feqh_questions: "Feqh Questions",
        aqaed_questions: "Aqaed Questions",
        feqh_posts: "Feqh Posts",
        aqaed_posts: "Aqaed Posts",
        send_question: "Send Question",
        my_questions: "My Questions",
        search: "Search",
        bookmark: "Bookmark",
        tags: "Tags",
        settings: "Settings",

        write_your_question: 'Write your question',
        what_is_your_question: 'What is your question ?',
        send: 'Send',
        feqhi: 'Feqhi',
        aqaedi: 'Aqaedi',
        i_dont_know: "I Don't Know",
        public: 'Public',
        private: 'Private',

        question_sent: 'Question has been sent.',
        question_didnot_sent: "question didn't sent , please try again.",
        question_length_must_be_more_than_10_letters: 'Question length must be more than 10 letters',

        general_posts: 'General Posts',
        loading_posts: 'Loading Posts...',

        salah: 'Prayers',
        soum: 'Fasting',
        zakah: 'Zakat',
        hij: 'Pilgrimage',
        kumos: 'Koums',
        amor: 'Amor Bel Maroof',
        nahi: 'Nahi An Almonker',
        tawlly: 'Altawlly Li Awlaa Allah',
        tabry: 'Altabry Men Adaa Allah',

        twheed: 'Altwheed',
        adel: 'Aladel',
        nibwa: 'Alnibwa',
        imama: 'Alimama',
        maad: 'Almaad',

        select_category: 'Select Category',
        no_category: 'None',
        none: 'None',
        privacy: 'Privacy',

        feqh: 'Feqh',
        aqaed: 'Aqaed',

        search_result: 'Search Result',
        loading: 'Loading...',
        type_of_question: 'Type Of Question',

        arabic: 'عربي',
        english: 'English',
        french: 'French',

        choose_language: 'Choose Language',
        change: 'Change',
        name_didnot_changed: "Name didn't changed",
        name_has_been_changed: "Name has been changed",
        name_didnot_changed_check_your_internet_connection: "Name didn't changed , check your internet connection",

        new_user: 'New User'

    },
    "fr": {
        the_question: 'Question : ',
        the_answer: 'Answer : ',
        unknown_user: 'Unknown User',
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
        home: "Home",
        error_while_loading: 'Error Happened While Loading',
        empty_result: 'No Result',
        loading_questions: 'Loading Questions...',
        reload: 'Reload',
        app_name: "Simple Answers",
        announcement: 'Fixed Announcement',
        you_cannot_save_more_than_500_questions: 'You cannot save more than 500 questions',
        you_cannot_save_more_than_500_posts: 'You cannot save more than 500 posts',


        feqh_questions: "Feqh Questions",
        aqaed_questions: "Aqaed Questions",
        feqh_posts: "Feqh Posts",
        aqaed_posts: "Aqaed Posts",
        send_question: "Send Question",
        my_questions: "My Questions",
        search: "Search",
        bookmark: "Bookmark",
        tags: "Tags",
        settings: "Settings",


        write_your_question: 'Write your question',
        what_is_your_question: 'What is your question ?',
        send: 'Send',
        feqhi: 'Feqhi',
        aqaedi: 'Aqaedi',
        i_dont_know: "I Don't Know",
        public: 'Public',
        private: 'Private',

        question_sent: 'Question has been sent.',
        question_didnot_sent: "question didn't sent , please try again.",
        question_length_must_be_more_than_10_letters: 'Question length must be more than 10 letters',

        general_posts: 'General Posts',
        loading_posts: 'Loading Posts...',


        salah: 'Prayers',
        soum: 'Fasting',
        zakah: 'Zakat',
        hij: 'Pilgrimage',
        kumos: 'Koums',
        amor: 'Amor Bel Maroof',
        nahi: 'Nahi An Almonker',
        tawlly: 'Altawlly Li Awlaa Allah',
        tabry: 'Altabry Men Adaa Allah',

        twheed: 'Altwheed',
        adel: 'Aladel',
        nibwa: 'Alnibwa',
        imama: 'Alimama',
        maad: 'Almaad',

        select_category: 'Select Category',
        no_category: 'None',
        none: 'None',
        privacy: 'Privacy',


        feqh: 'Feqh',
        aqaed: 'Aqaed',

        search_result: 'Search Result',
        loading: 'Loading...',
        type_of_question: 'Type Of Question',


        arabic: 'عربي',
        english: 'English',
        french: 'French',

        choose_language: 'Choose Language',
        change: 'Change',
        name_didnot_changed: "Name didn't changed",
        name_has_been_changed: "Name has been changed",
        name_didnot_changed_check_your_internet_connection: "Name didn't changed , check your internet connection",

        new_user: 'New User'
    }
};

export const string = new Proxy(lang, {get: function (object, name) {return object[Setting.settings.lang][name]}});
export default string;

