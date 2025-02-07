import styles from "@/styles/buttons/IntroButton.module.css";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const IntroButton = ({ children }: Props) => {
    return (
        <button className={styles.button}>{children}</button>
    );
};