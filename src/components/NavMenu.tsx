import styles from "@/styles/NavMenu.module.css";
import { ProductsNavButton } from "./buttons/ProductsNavButton";
import { CommunityNavButton } from "./buttons/CommunityNavButton";

export const NavMenu = () => {
    return (
        <nav className={styles.container}>
            <ProductsNavButton />
            <CommunityNavButton />
        </nav>
    );
};