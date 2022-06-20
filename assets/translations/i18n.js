import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'
import { Platform, NativeModules } from 'react-native'

import en from './en.json';
import pt from './pt.json';

const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
        

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: deviceLanguage,
    fallbackLng: 'en_US',
    resources: {
        en_US: en,
        pt_BR: pt
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;