import { ReactNode } from "react";
import styles from "./DropdownItems.module.css";

type Props = {
    children: ReactNode;
    className2?: string;
};

export const DropdownItems = ({ children, className2 }: Props) => {
    return (
        <ul className={`${styles.container} ${className2}`}>
            {children}
        </ul>
    );
};