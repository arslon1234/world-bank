import { createI18n } from "vue-i18n";
import oz from "@/i18/oz.json";
import ru from "@/i18/ru.json";
import uz from "@/i18/uz.json";

const lang = localStorage.getItem("lang");
console.log(lang, "lang")
const i18n = createI18n({
  messages: {
    uz,
    oz,
    ru,
  },
  silentTranslationWarn: true,
  fallbackLocale: lang || 'uz',
});


export default i18n;
