import styles from "@/styles/navigation/ButtonNav.module.css";

type Props = {
    title: string;
    expanded?: boolean;
    expImg?: string;
};

export const ButtonNav = ({ title, expanded = false, expImg = '' }: Props) => {
    return (
        <div className={styles.button}>
            <p className={styles.title}>{title}</p>
            {expanded && <img className={styles.expanded} src={expImg} alt={`Icone expandido de ${title}`} />}
        </div>
    );
};