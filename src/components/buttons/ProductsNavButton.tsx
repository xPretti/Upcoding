import { DropdownButton } from "./DropdownButton";

import DownArrow from '@/assets/downarrow.svg?react';
import { DropdownItem } from "./DropdownItemButton";

export const ProductsNavButton = () => {

    const getOptions = (): DropdownItem[] => {
        return [
            { title: "ScriptBot", description: "Robô multi estrategia.", onClick: () => console.log("ScriptBot") },
            { title: "Todos", description: "Ver todos os produtos", onClick: () => console.log("Todos") },
        ];
    };

    return (
        <DropdownButton title="Produtos" options={getOptions()} expImg={<DownArrow />} />
    );
};