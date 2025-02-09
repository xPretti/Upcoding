import styles from "./NavMenu.module.css";
import { ProductsNavButton } from "./buttons/ProductsNavButton";
import { CommunityNavButton } from "./buttons/CommunityNavButton";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export const NavMenu = () => {
    const breakpointValue = useBreakpoint();

    return (
        <div className={styles.container}>
            {breakpointValue == "lg" ? (
                <>
                    <ProductsNavButton />
                    <CommunityNavButton />
                </>
            ) : (
                <>
                    <button>Hamburguer</button>
                </>
            )}
        </div>
    );
};