import { useTranslation } from "react-i18next";
import styles from "./IntroBanner.module.css";
import { IntroButton } from "./buttons/IntroButton";

export const IntroBanner = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>
                    {t("intro-title")}
                </h1>
                <p className={styles.description}>
                    {t("intro-description")}
                </p>
                <IntroButton>{t("products")}</IntroButton>
            </div>
        </div>
    );
};