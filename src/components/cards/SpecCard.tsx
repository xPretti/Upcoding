import styles from "@/styles/cards/SpecCard.module.css";

type Props = {
    icon: string;
    title: string;
    description: string;
};

export const SpecCard = ({ icon, title, description }: Props) => {
    return (
        <div className={styles.card}>
            <img src={icon} alt="Icone" className={styles.icon} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};