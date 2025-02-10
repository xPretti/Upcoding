import { ReactNode } from "react";
import styles from "./DropdownItems.module.css";

type Props = {
    children: ReactNode;
};

export const DropdownItems = ({ children }: Props) => {
    return (
        <ul className={styles.container}>
            {children}
        </ul>
    );
};