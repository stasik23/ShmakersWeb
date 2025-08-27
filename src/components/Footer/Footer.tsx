import React from "react";
import styles from "./footer.module.css";
import { FaDiscord } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { RiInstagramFill, RiTelegram2Fill } from "react-icons/ri";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
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
        </footer>
    );
};