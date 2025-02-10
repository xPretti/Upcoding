import styles from "./HamburgerMenu.module.css";

import { CommunityNavButton } from "./buttons/CommunityNavButton";
import { ProductsNavButton } from "./buttons/ProductsNavButton";

export const HamburgerMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <ProductsNavButton isVertical={true} />
                <CommunityNavButton isVertical={true} />
            </div>
        </div>
    );
};