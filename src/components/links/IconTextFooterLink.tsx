import styles from "./IconTextFooterLink.module.css";
import { ReactNode } from "react";

type Props = {
    title: string;
    icon: ReactNode;
    url: string;
};

export const IconTextFooterLink = ({ title, icon, url }: Props) => {
    return (
        <a className={styles.container} href={url} target="_blank">
            <div className={styles.icon}>
                {icon}
            </div>
            <p className={styles.title}>{title}</p>
        </a>
    );
};
