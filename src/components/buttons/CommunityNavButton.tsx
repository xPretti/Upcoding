import { DropdownButton } from "./DropdownButton";

import DownArrow from '@/assets/downarrow.svg?react';
import { DropdownItem } from './DropdownItemButton';

export const CommunityNavButton = () => {

    const getOptions = (): DropdownItem[] => {
        return [
            { title: "Discord", description: ["Canais de suporte.", "Comunidade oficial no discord."], onClick: () => console.log("Discord") },
        ];
    };

    return (
        <DropdownButton title="Comunidade" options={getOptions()} expImg={<DownArrow />} />
    );
};