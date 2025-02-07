
import styles from '@/styles/Header.module.css';
import { LogoHead } from './head/LogoHead';
import { NavMenu } from './NavMenu';

type Props = {
    title?: string;
};

export const Header = ({ title = '' }: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.area}>
                <div className={styles.left}>
                    <LogoHead title={title} image='./public/logo.svg'></LogoHead>
                </div>
                <div className={styles.center}>
                    <NavMenu />
                </div>
                <div className={styles.right}>
                </div>
            </div>
        </header>
    );
};