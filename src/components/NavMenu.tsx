import styles from "@/styles/NavMenu.module.css";
import { ProductsNavButton } from "./buttons/ProductsNavButton";
import { CommunityNavButton } from "./buttons/CommunityNavButton";
import { useEffect, useState } from "react";

export const NavMenu = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 950);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 950);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={styles.container}>
            {isLargeScreen && (
                <>
                    <ProductsNavButton />
                    <CommunityNavButton />
                </>
            )}
        </div>
    );
};