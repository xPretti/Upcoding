import { DropdownItemType } from "../../@types/DropdownItemType";
import { DropdownButton } from "../dropdown/DropdownButton";

import DownArrow from '@/assets/downarrow.svg?react';
import { VerticalDropdownButton } from "../dropdown/VerticalDropdownButton";
import { useTranslation } from "react-i18next";

type Props = {
    isVertical?: boolean;
};

export const ProductsNavButton = ({ isVertical = false }: Props) => {

    const { t } = useTranslation();

    const getOptions = (): DropdownItemType[] => {
        return [
            { title: t("scriptbot"), description: t("scriptbot-description"), onClick: () => console.log("ScriptBot") },
            { title: t("all-products"), description: t("all-products-description"), onClick: () => console.log("Todos") },
        ];
    };

    return (
        <>
            {isVertical ? (
                <VerticalDropdownButton title={t('products')} options={getOptions()} expImg={<DownArrow />} />
            ) : (
                <DropdownButton title={t('products')} options={getOptions()} expImg={<DownArrow />} />
            )}
        </>
    );
};