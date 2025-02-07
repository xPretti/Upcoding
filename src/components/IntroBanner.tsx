import styles from "@/styles/IntroBanner.module.css";
import { IntroButton } from "./buttons/IntroButton";

export const IntroBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>
                    Soluções otimizadas com alta qualidade
                </h1>
                <p className={styles.description}>
                    Soluções inteligentes para MetaTrader 5: indicadores e robôs que aprimoram a análise e execução de estratégias no mercado financeiro.
                </p>
                <IntroButton>Produtos</IntroButton>
            </div>
        </div>
    );
};