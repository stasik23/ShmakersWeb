import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { FaBars, FaDiscord, FaPhone, FaTiktok, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
    const courses = [
        'Веб Розробка',
        'Розробка Ігор',
        'Робототехніка',
        '3D Моделювання',
        'Анімація',
        'Дизайн',
        'Англійська Мова',
        'Математика',
        'Нейромережі'
    ];

    const [activeCourse, setActiveCourse] = useState<number | null>(1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileCoursesExpanded, setIsMobileCoursesExpanded] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 440);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollCourses = (direction: 'left' | 'right') => {
        const coursesList = document.getElementById('coursesList') as HTMLElement;
        if (coursesList) {
            const scrollAmount = 300;
            if (direction === 'left') {
                coursesList.scrollLeft -= scrollAmount;
            } else {
                coursesList.scrollLeft += scrollAmount;
            }
        }
    };

    const handleCourseClick = (index: number) => {
        setActiveCourse(activeCourse === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileCourses = () => {
        setIsMobileCoursesExpanded(!isMobileCoursesExpanded);
    };

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.banner}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={styles.marquee}>
                    {Array(6).fill(0).map((_, i) => (
                        <div key={i} className={styles.marqueeContent}>
                            <span className={styles.promoTag}>ВАЙБОВИЙ СТАРТ</span>
                            <span className={styles.bannerText}>
                                <img
                                    src="/face-smile-upside-down 1.svg"
                                    className={styles.bannerIcon}
                                    alt="Smile icon"
                                />
                                За промокодом <span className={styles.promoCode}>VIBE</span> отримай 30% знижку на перший місяць навчання
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.nav
                className={styles.nav}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <div className={styles.navContainer}>
                    <div className={styles.navLeft}>
                        <div className={styles.logoContainer}>
                            <img src="/Shmakers2DLogo.svg" alt="Shmakers Logo" className={styles.logo} />
                        </div>
                    </div>

                    <div className={styles.navCenter}>
                        <div className={styles.navButton}>
                            <span>Курси</span>
                            <svg
                                className={styles.dropdownIcon}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>

                            {/* Dropdown горизонтальный */}
                            <div className={styles.dropdownMenu}>
                                <button
                                    className={styles.scrollButton}
                                    onClick={() => scrollCourses('left')}
                                    type="button"
                                >
                                    <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className={styles.coursesWrapper}>
                                    <div className={styles.coursesList} id="coursesList">
                                        {courses.map((course, index) => (
                                            <button
                                                key={index}
                                                className={`${styles.courseButton} ${activeCourse === index ? styles.courseButtonActive : ''}`}
                                                onClick={() => handleCourseClick(index)}
                                            >
                                                <span className={styles.courseButtonText}>{course}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className={styles.scrollButton}
                                    onClick={() => scrollCourses('right')}
                                    type="button"
                                >
                                    <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <a href="#" className={styles.navLink}>Переваги</a>
                        <a href="#" className={styles.navLink}>Напрямки</a>
                        <a href="#" className={styles.navLink}>Контакти</a>
                    </div>

                    <div className={styles.navRight}>
                        <a href="#" className={`${styles.socialIcon} ${styles.phoneIcon}`} aria-label="Phone">
                            <FaPhone className={styles.phoneIcon} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="Discord">
                            <FaDiscord className={styles.discordIcon} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="TikTok">
                            <FaTiktok className={styles.tiktokIcon} />
                        </a>

                        {/* Mobile menu button */}
                        <button
                            className={styles.burgerMenuButton}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ?
                                <FaTimes className={styles.burgerMenuIcon} /> :
                                <FaBars className={styles.burgerMenuIcon} />
                            }
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileMenuHeader}>
                        <div className={styles.mobileMenuLogo}>
                            <img src="/section.svg" alt="Shmakers Logo" className={styles.mobileMenuLogoIcon} />
                        </div>
                        <div className={styles.mobileMenuIcons}>
                            <a href="#" className={styles.mobileMenuPhone}>
                                <FaPhone className={styles.phoneIcon} />
                            </a>
                            <button className={styles.mobileMenuClose} onClick={toggleMobileMenu}>
                                <FaTimes className={styles.mobileMenuCloseIcon} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.mobileMenuContent}>
                        <button
                            className={`${styles.mobileMenuButton} ${isMobileCoursesExpanded ? styles.mobileMenuButtonActive : ''}`}
                            onClick={toggleMobileCourses}
                        >
                            <span>Курси</span>
                            <svg
                                className={`${styles.mobileMenuChevron} ${isMobileCoursesExpanded ? styles.mobileMenuChevronUp : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isMobileCoursesExpanded && (
                            <div className={styles.mobileCoursesGrid}>
                                <button className={styles.mobileCourseButton}>Веб Розробка</button>
                                <button className={styles.mobileCourseButton}>Розробка Ігор</button>
                                <button className={styles.mobileCourseButton}>Дизайн</button>
                                <button className={styles.mobileCourseButton}>Робототехніка</button>
                                <button className={styles.mobileCourseButton}>3D Моделювання</button>
                                <button className={styles.mobileCourseButton}>Анімація</button>
                                <button className={styles.mobileCourseButton}>Математика</button>
                                <button className={styles.mobileCourseButton}>Англійська мова</button>
                                <button className={styles.mobileCourseButton}>Німецька мова</button>
                            </div>
                        )}

                        <button className={styles.mobileMenuButton}>Переваги</button>
                        <button className={styles.mobileMenuButton}>Напрямки</button>
                        <button className={styles.mobileMenuButton}>Контакти</button>
                    </div>
                </div>
            )}

        </div>
    )
}