import React from "react";
import { motion } from "framer-motion";
import styles from "./footer.module.css";
import { FaDiscord } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { RiInstagramFill, RiTelegram2Fill } from "react-icons/ri";

export const Footer = () => {
    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.logoImg} src="section.svg" alt="" />
                </div>
                
                <nav className={styles.navigation}>
                    <a href="#" className={styles.navLink}>Відгуки</a>
                    <a href="#" className={styles.navLink}>Напрямки</a>
                    <a href="#" className={styles.navLink}>Ціни</a>
                    <a href="#" className={styles.navLink}>Особливості</a>
                </nav>
                
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialLink}>
                        <RiTelegram2Fill className={styles.icon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <FaDiscord className={styles.icon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <SiTiktok className={styles.icon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <RiInstagramFill className={styles.icon} />
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};