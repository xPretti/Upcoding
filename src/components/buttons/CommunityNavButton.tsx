import { NavButton } from "./NavButton";

import DownArrow from '@/assets/downarrow.svg?react';

export const CommunityNavButton = () => {
    return (
        <NavButton title="Comunidade" expanded={true} expImg={<DownArrow />} />
    );
};