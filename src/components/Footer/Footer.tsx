import React from "react";
import styles from "./footer.module.css";
import { FaDiscord, FaPhone } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="section.svg" alt="" />
                </div>
                
                <nav className={styles.navigation}>
                    <a href="#" className={styles.navLink}>Відгуки</a>
                    <a href="#" className={styles.navLink}>Напрямки</a>
                    <a href="#" className={styles.navLink}>Ціни</a>
                    <a href="#" className={styles.navLink}>Особливості</a>
                </nav>
                
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialLink}>
                        <FaDiscord className={styles.icon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <SiTelegram className={styles.icon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <FaPhone className={styles.icon} />
                    </a>
                </div>
            </div>
        </footer>
    );
};