import styles from "./IconTextFooterLink.module.css";
import { ReactNode } from "react";

type Props = {
    title: string;
    icon: ReactNode;
};

export const IconTextFooterLink = ({ title, icon }: Props) => {
    return (
        <a className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <p className={styles.title}>{title}</p>
        </a>
    );
};
