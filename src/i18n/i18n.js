import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';

import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import zhTwLocale from 'element-ui/lib/locale/lang/zh-TW';
import trTrLocale from 'element-ui/lib/locale/lang/tr-TR';

import en from './langs/en';
import cn from './langs/cn';
import tw from './langs/tw';
import tr from './langs/tr';

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    ...enLocale,
  },
  cn: {
    ...cn,
    ...zhLocale,
  },
  tw: {
    ...tw,
    ...zhTwLocale,
  },  
  tr: {
    ...tr,
    ...trTrLocale,
  },
};

const i18n = new VueI18n({
  locale: localStorage.lang || 'en',
  messages,
});

locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
