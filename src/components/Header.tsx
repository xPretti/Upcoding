
import styles from '@/styles/Header.module.css';
import { Logo } from './Logo';

type Props = {
    title?: string;
};

export function Header({ title = '' }: Props) {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Logo title={title} image='./public/logo.svg'></Logo>
            </div>
            <h1>3</h1>
        </div>
    );
}