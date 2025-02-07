
import styles from '@/styles/Header.module.css';
import { Logo } from './commons/Logo';
import { NavMenu } from './NavMenu';

type Props = {
    title?: string;
};

export const Header = ({ title = '' }: Props) => {
    return (
        <nav className={styles.header}>
            <div className={styles.area}>
                <div className={styles.left}>
                    <Logo title={title} image='./public/logo.svg'></Logo>
                </div>
                <div className={styles.center}>
                    <NavMenu />
                </div>
                <div className={styles.right}>
                </div>
            </div>
        </nav>
    );
};