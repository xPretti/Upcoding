import { NavButton } from "./NavButton";

import DownArrow from '@/assets/downarrow.svg?react';

export const ProductsNavButton = () => {
    return (
        <NavButton title="Produtos" expanded={true} expImg={<DownArrow />} />
    );
};