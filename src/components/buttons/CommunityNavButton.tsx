import { DropdownButton } from "../dropdown/DropdownButton";

import DownArrow from '@/assets/downarrow.svg?react';
import { VerticalDropdownButton } from "../dropdown/VerticalDropdownButton";
import { DropdownItemType } from "../../@types/DropdownItemType";
import { useTranslation } from "react-i18next";

type Props = {
    isVertical?: boolean;
};

export const CommunityNavButton = ({ isVertical = false }: Props) => {

    const { t } = useTranslation();

    const getOptions = (): DropdownItemType[] => {
        return [
            { title: t('discord'), description: t('discord-description', { returnObjects: true }) as string[], onClick: () => window.open("https://discord.upcoding.net/", "_blank") },
        ];
    };

    return (
        <>
            {isVertical ? (
                <VerticalDropdownButton title={t('community')} options={getOptions()} expImg={<DownArrow />} />
            ) : (
                <DropdownButton title={t('community')} options={getOptions()} expImg={<DownArrow />} />
            )}
        </>
    );
};