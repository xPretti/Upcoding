import styles from "@/styles/navigation/MenuNav.module.css";
import { ProductButtonNav } from './ProductButtonNav';
import { CommunityButtonNav } from "./CommunityButtonNav";

export const MenuNav = () => {
    return (
        <nav className={styles.container}>
            <ProductButtonNav />
            <CommunityButtonNav />
        </nav>
    );
};