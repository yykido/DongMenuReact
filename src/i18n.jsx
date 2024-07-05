import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// 导入翻译资源
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React",
            "Counter": "Counter",
            "Increment": "Increment",
            // 其他翻译文本...
        },
        common: {
            "Save": "Save",
            "Cancel": "Cancel",
            // 更多通用文本...
        },
        page1: {
            "Title": "Page 1 Title",
            "Content": "This is the content of Page 1."
            // 更多页面1的文本...
        }
    },
    zh: {
        translation: {
            "Welcome to React": "欢迎使用 React",
            "Counter": "计数器",
            "Increment": "增加",
            // 其他翻译文本...
        },
        common: {
            "Save": "保存",
            "Cancel": "取消",
            // 更多通用文本...
        },
        page1: {
            "Title": "页面1标题",
            "Content": "这是页面1的内容。"
            // 更多页面1的文本...
        }
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        ns: ['translation', 'common', 'page1'], // 添加命名空间
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
