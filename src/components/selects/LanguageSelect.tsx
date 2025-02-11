import styles from "./LanguageSelect.module.css";

import { LanguageType } from "@/@types/LanguageType";
import { useState, CSSProperties } from 'react';
import { useTranslation } from "react-i18next";

import LanguageIcon from '@/assets/translate.svg?react';
import { useClickOutside } from "@/hooks/useClickOutside";
import { DropdownItems } from "../dropdown/DropdownItems";
import { DropdownItemButton } from "../dropdown/DropdownItemButton";
import { DropdownItemType } from "@/@types/DropdownItemType";

type Props = {
    languages: LanguageType[];
};

export const LanguageSelect = ({ languages }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const defineLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        closeDropdown();
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const closeDropdown = () => setIsOpen(false);

    const containerRef = useClickOutside<HTMLDivElement>({ onClickOutside: closeDropdown });

    const getDropitemType = (option: LanguageType): DropdownItemType => {
        const newOptions: DropdownItemType = {
            title: option.text,
            onClick: () => {
                defineLanguage(option.type);
            }
        };
        return newOptions;
    };

    return (
        <div className={styles.container} ref={containerRef} onClick={toggleDropdown}>
            <p className={styles.selectLanguage}>{t('language')}</p>
            <div className={styles.icon}>
                <LanguageIcon />
            </div>
            {isOpen && (
                <div className={styles.options}>
                    <DropdownItems>
                        {languages.map((option, index) => (
                            <>
                                {option.type === language
                                    ? <DropdownItemButton classTitle={styles.optionSelect} key={index} dropdownItemType={getDropitemType(option)} />
                                    : <DropdownItemButton key={index} dropdownItemType={getDropitemType(option)} />
                                }

                            </>
                        ))}
                    </DropdownItems>
                </div>
            )}
        </div>
    );
};