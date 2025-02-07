import styles from '@/styles/Footer.module.css';

import footerImg from '@/assets/footer.png';
import footerLayerImg from '@/assets/footerLayer.png';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={footerImg} alt="Logo" className={styles.image} />
            <img src={footerLayerImg} alt="Logo" className={styles.imageLayer} />
        </footer>
    );
};