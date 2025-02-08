import styles from "@/styles/buttons/DropdownItemButton.module.css";

export type DropdownItem = {
    title: string;
    description: string | string[];
    onClick: () => void;
};

export const DropdownItemButton = ({ title, description, onClick }: DropdownItem) => {
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