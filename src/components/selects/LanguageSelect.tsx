import styles from "./LanguageSelect.module.css";

import { LanguageType } from "@/@types/LanguageType";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageIcon from '@/assets/translate.svg?react';

type Props = {
    languages: LanguageType[];
};

export const LanguageSelect = ({ languages }: Props) => {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const defineLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };


    return (
        <div className={styles.container}>
            <select className={styles.select} value={language} onChange={e => defineLanguage(e.target.value)}>
                {languages.map((language, index) => (
                    <option className={styles.option} key={index} value={language.type}>{language.text}</option>
                ))}
            </select>
            <div className={styles.icon}>
                <LanguageIcon />
            </div>
        </div>
    );
};