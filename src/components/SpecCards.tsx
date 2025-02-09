import { SpecCard } from "./cards/SpecCard";
import styles from "./SpecCards.module.css";

import CommunityIcon from '@/assets/community.svg?react';
import SupportIcon from '@/assets/support.svg?react';
import StarIcon from '@/assets/star.svg?react';

export const SpecCards = () => {
    return (
        <div className={styles.cards}>
            <SpecCard icon={<CommunityIcon />} title="Comunidade" description="Comunidade em Expansão" />
            <SpecCard icon={<SupportIcon />} title="24/7" description="Atendimento Ao Vivo" />
            <SpecCard icon={<StarIcon />} title="Produtos" description="Qualidade Garantida" />
        </div>
    );
};