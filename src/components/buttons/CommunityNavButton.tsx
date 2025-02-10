import { DropdownButton } from "../dropdown/DropdownButton";

import DownArrow from '@/assets/downarrow.svg?react';
import { VerticalDropdownButton } from "../dropdown/VerticalDropdownButton";
import { DropdownItemType } from "../../@types/DropdownItemType";

type Props = {
    isVertical?: boolean;
};

export const CommunityNavButton = ({ isVertical = false }: Props) => {

    const getOptions = (): DropdownItemType[] => {
        return [
            { title: "Discord", description: ["Canais de suporte.", "Comunidade oficial no discord."], onClick: () => console.log("Discord") },
        ];
    };

    return (
        <>
            {isVertical ? (
                <VerticalDropdownButton title="Comunidade" options={getOptions()} expImg={<DownArrow />} />
            ) : (
                <DropdownButton title="Comunidade" options={getOptions()} expImg={<DownArrow />} />
            )}
        </>
    );
};