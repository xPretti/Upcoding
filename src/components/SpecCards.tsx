import { SpecCard } from "./cards/SpecCard";
import styles from "@/styles/SpecCards.module.css";

export const SpecCards = () => {
    return (
        <div className={styles.cards}>
            <SpecCard icon="./public/logo.svg" title="Title" description="Description" />
            <SpecCard icon="./public/logo.svg" title="Title" description="Description" />
            <SpecCard icon="./public/logo.svg" title="Title" description="Description" />
        </div>
    );
};