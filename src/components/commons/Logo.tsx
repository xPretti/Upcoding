import styles from "./Logo.module.css";
import { ReactNode } from "react";

type Props = {
    title: string;
    image: ReactNode;
};

export const Logo = ({ title, image }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                {image}
            </div>

            <p className={styles.title}>{title}</p>
        </div>
    );
};