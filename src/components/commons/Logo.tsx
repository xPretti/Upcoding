import styles from "./Logo.module.css";
import { ReactNode } from "react";

type Props = {
    title: string;
    image: ReactNode;
    url?: string;
};

export const Logo = ({ title, image, url }: Props) => {
    return (
        <a className={styles.container} href={url}>
            <div className={styles.logo}>
                {image}
            </div>

            <p className={styles.title}>{title}</p>
        </a>
    );
};