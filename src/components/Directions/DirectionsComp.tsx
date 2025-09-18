"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./directions.module.css";
import { FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoBrush } from "react-icons/io5";

interface DirectionCardProps {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const cardsData: DirectionCardProps[] = [
    {
        id: 1,
        title: "Web Design",
        description: "В цьому напрямку ви дізнаєтесь все про веб розробку. Спробуєте себе в ролі Full Stack розробника та оберете те, що дійсно сподобається. Ми дамо вам не тільки основи Html, Css, JS, а й познайомимо з актуальними фреймворками.",
        icon: <IoBrush className={styles.icon}/>,
        image: "/web-design.svg"
    },
    {
        id: 2,
        title: "Front End",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaCog className={styles.icon}/>,
        image: "/front-end.svg"
    },
    {
        id: 3,
        title: "Embedded",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaCog className={styles.icon}/>,
        image: "/embedded.svg"
    },
    {
        id: 4,
        title: "Back End",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaCog className={styles.icon}/>,
        image: "/back-end.svg"
    },
    {
        id: 5,
        title: "Game Development",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaCog className={styles.icon}/>,
        image: "/gamedev.svg"
    },
    {
        id: 6,
        title: "Web Development",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <IoBrush className={styles.icon}/>,
        image: "/web-design.svg"
    }
]

export const DirectionsComp = () => {
    const [, setHoveredCard] = useState<number | null>(null);
    const [clickedCard, setClickedCard] = useState<number | null>(null);

    const cardVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 }
    };

    const handleCardClick = (cardId: number) => {
        setClickedCard(clickedCard === cardId ? null : cardId);
    };
    return (
        <section className={styles.section}>
            <motion.h2 
                className={styles.heading}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
                НАПРЯМКИ ДЛЯ РОЗВИТКУ
            </motion.h2>
            <div className={styles.grid}>
                {cardsData.map((card, index) => (
                    <motion.div 
                        key={index} 
                        className={`${styles.card} ${clickedCard === card.id ? styles.expanded : ''}`}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => handleCardClick(card.id)}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ opacity: 0 }}
                        transition={{ 
                            duration: .7, 
                            delay: 0.6 + (index * 0.2),
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <div className={styles.content}>
                            <img src={card.image} alt={card.title} className={styles.image} />
                            <div className={styles.heading_back}>
                                <h1 className={styles.cardTitle}>{card.title} {card.icon}</h1>
                                <div className={styles.arrowIcon}>
                                    {clickedCard === card.id ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>
                            <div className={`${styles.details} ${clickedCard === card.id ? styles.showDetails : ''}`}>
                                <p className={styles.description}>{card.description}</p>
                                <button className={styles.button}>Опанувати</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
