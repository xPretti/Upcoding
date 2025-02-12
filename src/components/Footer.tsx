import styles from './Footer.module.css';

import footerImg from '@/assets/footer.png';
import footerLayerImg from '@/assets/footerLayer.png';
import { FooterCard } from './cards/FooterCard';
import { IconTextFooterLink } from './links/IconTextFooterLink';

import DiscordIcon from '@/assets/discord.svg?react';
import DocsIcon from '@/assets/docs.svg?react';
import TermsIcon from '@/assets/terms.svg?react';

import { TimeUtils } from '@/utils/TimeUtils';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <img src={footerImg} alt="Logo" className={styles.image} />
            <div className={styles.footerContent}>
                <img src={footerLayerImg} alt="Logo" className={styles.imageLayer} />
                <div className={styles.content}>
                    <FooterCard title={t("footer-community")}>
                        <IconTextFooterLink title={t("discord")} icon={<DiscordIcon />} url="https://discord.upcoding.net/" />
                    </FooterCard>
                    <FooterCard title={t("footer-learn")}>
                        <IconTextFooterLink title={t("footer-item-docs")} icon={<DocsIcon />} url="https://upcoding.net/docs" />
                    </FooterCard>
                    <FooterCard title={t("footer-enterprise")}>
                        <IconTextFooterLink title={t("footer-item-terms")} icon={<TermsIcon />} url="https://upcoding.net/terms" />
                    </FooterCard>
                </div>
                <h1 className={styles.copyright}>{t("footer-copyright", { year: TimeUtils.getYear() })}</h1>
            </div>
        </footer>
    );
};