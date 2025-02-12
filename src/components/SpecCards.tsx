import { SpecCard } from "./cards/SpecCard";
import styles from "./SpecCards.module.css";

import CommunityIcon from '@/assets/community.svg?react';
import SupportIcon from '@/assets/support.svg?react';
import StarIcon from '@/assets/star.svg?react';

import { useTranslation } from 'react-i18next';

export const SpecCards = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.cards}>
            <SpecCard icon={<CommunityIcon />} title={t("card-community")} description={t("card-community-description")} />
            <SpecCard icon={<SupportIcon />} title={t("card-support")} description={t("card-support-description")} />
            <SpecCard icon={<StarIcon />} title={t("card-products")} description={t("card-products-description")} />
        </div>
    );
};