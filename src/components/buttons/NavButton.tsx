import styles from "@/styles/buttons/NavButton.module.css";
import { ReactNode } from "react";

type Props = {
    title: string;
    expanded?: boolean;
    expImg?: ReactNode;
};

export const NavButton = ({ title, expanded = false, expImg = '' }: Props) => {
    return (
        <div className={styles.button}>
            <p className={styles.title}>{title}</p>
            {expanded &&
                <div className={styles.expanded}>
                    {expImg}
                </div>}
        </div>
    );
};