import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import "./App.css";
import dePersonalInfo from "./data/de_personal_info";
import enPersonalInfo from "./data/en_personal_info";

export const resources = {
  en: {
    personalInfo: enPersonalInfo,
    translation: {
      asdf: "test",
    },
  },
  de: {
    personalInfo: dePersonalInfo,
    translation: {
      asdf: "deutsch",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  resources,
});
