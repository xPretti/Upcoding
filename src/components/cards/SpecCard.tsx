import styles from "./SpecCard.module.css";
import { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    title: string;
    description: string;
};

export const SpecCard = ({ icon, title, description }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconFrame}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                </div>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};