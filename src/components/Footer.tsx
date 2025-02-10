import styles from './Footer.module.css';

import footerImg from '@/assets/footer.png';
import footerLayerImg from '@/assets/footerLayer.png';
import { FooterCard } from './cards/FooterCard';
import { IconTextFooterLink } from './links/IconTextFooterLink';

import DiscordIcon from '@/assets/discord.svg?react';
import DocsIcon from '@/assets/docs.svg?react';
import TermsIcon from '@/assets/terms.svg?react';

import { TimeUtils } from '@/utils/TimeUtils';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={footerImg} alt="Logo" className={styles.image} />
            <div className={styles.footerContent}>
                <img src={footerLayerImg} alt="Logo" className={styles.imageLayer} />
                <div className={styles.content}>
                    <FooterCard title="Comunidade">
                        <IconTextFooterLink title="Discord" icon={<DiscordIcon />} url="https://discord.upcoding.net/" />
                    </FooterCard>
                    <FooterCard title="Aprender">
                        <IconTextFooterLink title="Documentação" icon={<DocsIcon />} url="https://upcoding.net/docs" />
                    </FooterCard>
                    <FooterCard title="Empresa">
                        <IconTextFooterLink title="Termos de uso" icon={<TermsIcon />} url="https://upcoding.net/terms" />
                    </FooterCard>
                </div>
                <h1 className={styles.copyright}>Copyright © Upcoding {TimeUtils.getYear()}</h1>
            </div>
        </footer>
    );
};