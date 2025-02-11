import { DropdownItemType } from "../../@types/DropdownItemType";
import styles from "./DropdownItemButton.module.css";

type Props = {
    dropdownItemType: DropdownItemType;
    classItem?: string;
    classTitle?: string;
    classContent?: string;
};

export const DropdownItemButton = ({ dropdownItemType, classItem, classTitle, classContent }: Props) => {
    const { title, description, onClick } = dropdownItemType;
    return (
        <div className={`${styles.item} ${classItem}`} onClick={onClick}>
            <p className={`${styles.title} ${classTitle}`}>
                {title}
            </p>
            {description && <div className={`${styles.content} ${classContent}`}>
                {Array.isArray(description) ? description.map((item, index) => <p key={index}>{item}</p>) : description}
            </div>}
        </div >
    );
};