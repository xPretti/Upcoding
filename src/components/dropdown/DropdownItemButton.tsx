import { DropdownItemType } from "../../@types/DropdownItemType";
import styles from "./DropdownItemButton.module.css";

export const DropdownItemButton = ({ title, description, onClick }: DropdownItemType) => {
    return (
        <div className={styles.item} onClick={onClick}>
            <p className={styles.title}>
                {title}
            </p>
            <div className={styles.content}>
                {Array.isArray(description) ? description.map((item, index) => <p key={index}>{item}</p>) : description}
            </div>
        </div>
    );
};