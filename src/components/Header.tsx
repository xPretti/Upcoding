
import styles from './Header.module.css';
import { Logo } from './commons/Logo';
import { NavMenu } from './NavMenu';

import LLogo from "@/assets/logo.svg?react";

type Props = {
    title?: string;
};

export const Header = ({ title = '' }: Props) => {
    return (
        <nav className={styles.header}>
            <div className={styles.area}>
                <div className={styles.left}>
                    <Logo title={title} image={<LLogo />}></Logo>
                </div>
                <div className={styles.center}>
                    <NavMenu />
                </div>
                <div className={styles.right}>
                </div>
            </div>
        </nav >
    );
};