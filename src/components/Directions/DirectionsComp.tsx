import React, { useState } from "react";
import styles from "./directions.module.css";
import { FaCog, FaCode, FaMicrochip, FaServer, FaGamepad, FaPalette, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
        icon: <FaPalette />,
        image: "/web-design.svg"
    },
    {
        id: 2,
        title: "Front End",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaCode />,
        image: "/front-end.svg"
    },
    {
        id: 3,
        title: "Embedded",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaMicrochip />,
        image: "/embedded.svg"
    },
    {
        id: 4,
        title: "Back End",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaServer />,
        image: "/back-end.svg"
    },
    {
        id: 5,
        title: "Game Development",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaGamepad />,
        image: "/gamedev.svg"
    },
    {
        id: 6,
        title: "Web Development",
        description: "В цьому напрямку ви діагностеcь все про веб розробку. Спробуйте себе в ролі Full Stack розробника та оберіть те, що вашій душі стоподобається. Ми даємо вам не тільки основи Html, Css, Js, а й познайомимо з актуальними фреймворками.",
        icon: <FaCog />,
        image: "/web-design.svg"
    }
]

export const DirectionsComp = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>НАПРЯМКИ ДЛЯ РОЗВИТКУ</h2>
            <div className={styles.grid}>
                {cardsData.map((card, index) => (
                    <div key={index} className={`${styles.card} ${hoveredCard == card.id ? styles.expanded : ''}`}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}>
                        <div className={styles.content}>
                            <img src={card.image} alt={card.title} className={styles.image} />
                            <div className={styles.heading_back}>
                                <h1 className={styles.cardTitle}>{card.title} {card.icon}</h1>
                                <div className={styles.arrowIcon}>
                                    {hoveredCard === card.id ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>
                            <div className={`${styles.details} ${hoveredCard === card.id ? styles.showDetails : ''}`}>
                                <p className={styles.description}>{card.description}</p>
                                <button className={styles.button}>Опанувати</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
