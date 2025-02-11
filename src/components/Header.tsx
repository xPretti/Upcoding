
import styles from './Header.module.css';
import { Logo } from './commons/Logo';
import { NavMenu } from './NavMenu';

import LogoIcon from "@/assets/logo.svg?react";
import MenuIcon from "@/assets/menu.svg?react";
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { HamburgerMenu } from './HamburgerMenu';
import { useState } from 'react';
import { LanguageSelect } from './selects/LanguageSelect';

type Props = {
    title?: string;
};

export const Header = ({ title = '' }: Props) => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const breackpoint = useBreakpoint();

    const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);

    return (
        <nav className={styles.header}>
            <div className={styles.area}>
                <div className={styles.left}>
                    <Logo title={title} image={<LogoIcon />} url="/"></Logo>
                </div>
                <div className={styles.menu}>
                    {breackpoint == "lg"
                        ?
                        <>
                            <NavMenu />
                            <LanguageSelect languages={[{ type: "pt_Br", text: "Português" }, { type: "en", text: "English" }]} />
                        </>
                        :
                        <div className={styles.collapseArea}>
                            <MenuIcon onClick={toggleHamburgerMenu} className={styles.collapseButton} />
                        </div>
                    }
                </div>
            </div>
            {showHamburgerMenu && breackpoint != "lg" &&
                <div className={styles.hamburgerMenu}>
                    <HamburgerMenu />
                    <div className={styles.languageSelect}>
                        <LanguageSelect languages={[{ type: "pt_Br", text: "Português" }, { type: "en", text: "English" }]} />
                    </div>
                </div>}
        </nav >
    );
};