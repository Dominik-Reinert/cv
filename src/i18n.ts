import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import "./App.css";
import dePersonalInfo from "./data/de_personal_info";
import { deResume } from "./data/de_resume";
import enPersonalInfo from "./data/en_personal_info";
import { enResume } from "./data/en_resume";

export const resources = {
  en: {
    personalInfo: enPersonalInfo,
    resume: enResume
  },
  de: {
    personalInfo: dePersonalInfo,
    resume: deResume
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  resources,
});
