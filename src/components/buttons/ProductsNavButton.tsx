import { DropdownItemType } from "../../@types/DropdownItemType";
import { DropdownButton } from "../dropdown/DropdownButton";

import DownArrow from '@/assets/downarrow.svg?react';
import { VerticalDropdownButton } from "../dropdown/VerticalDropdownButton";

type Props = {
    isVertical?: boolean;
};

export const ProductsNavButton = ({ isVertical = false }: Props) => {

    const getOptions = (): DropdownItemType[] => {
        return [
            { title: "ScriptBot", description: "Robô multi estrategia.", onClick: () => console.log("ScriptBot") },
            { title: "Todos", description: "Ver todos os produtos", onClick: () => console.log("Todos") },
        ];
    };

    return (
        <>
            {isVertical ? (
                <VerticalDropdownButton title="Produtos" options={getOptions()} expImg={<DownArrow />} />
            ) : (
                <DropdownButton title="Produtos" options={getOptions()} expImg={<DownArrow />} />
            )}
        </>
    );
};