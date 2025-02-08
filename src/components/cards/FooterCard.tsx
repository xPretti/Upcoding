import styles from "@/styles/cards/FooterCard.module.css";
import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

export const FooterCard = ({ title, children }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                {children}
            </div>
        </div>
    );
};