import React, { useState } from 'react';
import {
    FaUserGraduate,
    FaLink,
    FaGlobe,
    FaFolder,
    FaRobot,
    FaUsers,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './stepsgrid.module.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

interface FeatureCard {
    id: number;
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
}

const featuresData: FeatureCard[] = [
    {
        id: 1,
        icon: <FaUserGraduate />,
        step: 'Крок 01',
        title: 'Вміння самонавчатись',
        description: 'Ми дійсно дамо тобі вудочку, а не будемо годувати тебе рибою декілька років.'
    },
    {
        id: 2,
        icon: <FaLink />,
        step: 'Крок 02',
        title: 'Конект з викладачем',
        description: 'У нас багато спільних тем з учнями, від чого бар\'єри у спілкуванні відсутні.'
    },
    {
        id: 3,
        icon: <FaGlobe />,
        step: 'Крок 03',
        title: 'Всесторонній розвиток',
        description: 'Ми фокусуємось на технічних навичках, а також на Soft Skills та інозмених мовах.'
    },
    {
        id: 4,
        icon: <FaFolder />,
        step: 'Крок 04',
        title: 'Проєктний підхід',
        description: 'Ми не вчимось по презентаціях, книжках чи відосах. Основа - це твій проєкт.'
    },
    {
        id: 5,
        icon: <FaRobot />,
        step: 'Крок 05',
        title: 'AI орієнтованість',
        description: 'Навчимо не бути вайбкодерами, а давати х10 від звичайного результату.'
    },
    {
        id: 6,
        icon: <FaUsers />,
        step: 'Крок 06',
        title: 'Потужний нетворкінг',
        description: 'Наша спільнота для підлітків - джерело нових тіммейтів на проєктах та в іграх.'
    }
];

export const StepsGrid = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuresData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + featuresData.length) % featuresData.length);
    };

    return (
        <div className={styles.wrapper}>
            <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
                Що зробить твоє навчання унікальним?
            </motion.h2>

            <div className={styles.container}>
                {/* Desktop Grid */}
                <div className={styles.featuresGrid}>
                    {featuresData.map((feature, index) => (
                        <motion.div 
                            key={feature.id} 
                            className={styles.featureCard}
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ 
                                duration: 1.6, 
                                delay: 0.45 + (index * 0.14),
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {feature.icon}
                                </div>
                                <div className={styles.stepBadge}>
                                    {feature.step}
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    {feature.title}
                                </h3>
                                <p className={styles.cardDescription}>
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className={styles.mobileSlider}>
                    <div className={styles.sliderContainer}>
                        <button
                            onClick={prevSlide}
                            className={styles.sliderButton}
                            aria-label="Previous slide"
                        >
                            <MdArrowBackIos className={styles.arrowIcon} />
                        </button>

                        <motion.div 
                            key={currentSlide}
                            className={styles.slideCard}
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.slideHeader}>
                                <div className={styles.slideIcon}>
                                    {featuresData[currentSlide].icon}
                                </div>
                                <div className={styles.slideStep}>
                                    {featuresData[currentSlide].step}
                                </div>
                            </div>

                            <div>
                                <h3 className={styles.slideTitle}>
                                    {featuresData[currentSlide].title}
                                </h3>
                                <p className={styles.slideDescription}>
                                    {featuresData[currentSlide].description}
                                </p>
                            </div>
                        </motion.div>

                        <button
                            onClick={nextSlide}
                            className={styles.sliderButton}
                            aria-label="Next slide"
                        >
                            <MdArrowForwardIos className={styles.arrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};