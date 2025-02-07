import styles from "@/styles/buttons/NavButton.module.css";

type Props = {
    title: string;
    expanded?: boolean;
    expImg?: string;
};

export const NavButton = ({ title, expanded = false, expImg = '' }: Props) => {
    return (
        <div className={styles.button}>
            <p className={styles.title}>{title}</p>
            {expanded && <img className={styles.expanded} src={expImg} alt={`Icone expandido de ${title}`} />}
        </div>
    );
};