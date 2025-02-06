
import styles from '@/styles/Header.module.css';
import { LogoHead } from './LogoHead';
import { MenuNav } from '../navigation/MenuNav';

type Props = {
    title?: string;
};

export const Header = ({ title = '' }: Props) => {
    return (
        <div className={styles.header}>
            <div className={styles.area}>
                <div className={styles.left}>
                    <LogoHead title={title} image='./public/logo.svg'></LogoHead>
                </div>
                <div className={styles.center}>
                    <MenuNav />
                </div>
                <div className={styles.right}>
                </div>
            </div>
        </div>
    );
};