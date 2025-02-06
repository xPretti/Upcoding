import styles from "./../styles/Logo.module.css";

type Props = {
    title: string;
    image: string;
};

export function Logo({ title, image }: Props) {
    return (
        <div className={styles.container}>
            <img src={image} alt="Logo" className={styles.logo} />
            <p className={styles.title}>{title}</p>
        </div>
    );
}