import styles from "./NavMenu.module.css";
import { ProductsNavButton } from "./buttons/ProductsNavButton";
import { CommunityNavButton } from "./buttons/CommunityNavButton";

export const NavMenu = () => {
    return (
        <div className={styles.content}>
            <ProductsNavButton />
            <CommunityNavButton />
        </div>
    );
};