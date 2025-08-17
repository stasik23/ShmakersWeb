import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './feedback.module.css';

interface Review {
    id: number;
    name: string;
    direction: string;
    rating: number;
    comment: string;
    avatar: string;
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: 'Petro',
        direction: 'Embedded',
        rating: 5,
        comment: 'Жодного разу не пожалкував, що обрав ці курси. Все було на вищому рівні. Дякую викладачам за максимальну віддачу у професійне навчання. Буду рекомендувати Shmakers своїм знайомим)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 2,
        name: 'Petro',
        direction: 'Embedded',
        rating: 5,
        comment: 'Жодного разу не пожалкував, що обрав ці курси. Все було на вищому рівні. Дякую викладачам за максимальну віддачу у професійне навчання. Буду рекомендувати Shmakers своїм знайомим)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 3,
        name: 'Kateryna',
        direction: 'Web Design',
        rating: 5,
        comment: 'Це був цікавий досвід і досить класне знайомство з ІТ',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 4,
        name: 'Artem',
        direction: 'Game Development',
        rating: 5,
        comment: 'Я щиро вдячний Shmakers за чудову можливість пройти курс Game Development. Це був неймовірний досвід, який не тільки розширив мої знання, а й дав практичні навички.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 5,
        name: 'Maria',
        direction: '3D',
        rating: 5,
        comment: 'Відмінні курси з 3D моделювання. Викладачі професіонали своєї справи. Рекомендую всім!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 6,
        name: 'John',
        direction: 'English',
        rating: 5,
        comment: 'Great English courses! I improved my language skills significantly. Thank you Shmakers!',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 7,
        name: 'Alex',
        direction: 'Front End',
        rating: 5,
        comment: 'Курс Front End допоміг мені стати професійним розробником. Дуже вдячний за якісне навчання!',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 8,
        name: 'Sofia',
        direction: 'Back End',
        rating: 5,
        comment: 'Відмінна програма Back End розробки. Отримала всі необхідні знання для роботи в ІТ.',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 9,
        name: 'Igor',
        direction: 'Web Design',
        rating: 5,
        comment: 'Навчання на курсі Web Design було дуже корисним. Отримав всі необхідні навички для роботи дизайнером.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
];

const categories = ['All', 'Web Design', 'Game Development', '3D', 'English', 'Embedded', 'Front End', 'Back End'];

export const FeedbackComp: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Filter reviews based on selected category
    const filteredReviews = selectedCategory === 'All'
        ? reviewsData
        : reviewsData.filter(review => review.direction === selectedCategory);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                fill={index < rating ? '#FCD34D' : 'transparent'}
                stroke="#FCD34D"
                size={16}
            />
        ));
    };
    /*TODO УБРАТЬ ПАГИНАЦИЮ, СДЕЛАТЬ ОВЕРФЛОУ У. + ФИЛЬТРЫ ПО ОДНОЙ КАТЕГОРИИ. + убрать адаптив под 2к мониторы, по адаптиву ориентироватся по 1440 ширине + фикс всех стилей под фигму + ворк над футером*/
    return (
        <div className={styles.container}>
                <h1 className={styles.title}>ВІДГУКИ ПРО НАС</h1>

                <div className={styles.categories}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.reviewsContainer}>
                    <div className={styles.reviewsList}>
                        {filteredReviews.length > 0 ? (
                            filteredReviews.map((review, index) => {
                                const isEven = index % 2 === 1;
                                return (
                                    <div key={review.id} className={styles.reviewItem}>
                                        <div className={`${styles.reviewCard} ${isEven ? styles.even : ''}`}>
                                            <img src={review.avatar} alt={review.name} className={styles.avatar} />
                                            <div className={styles.reviewInfo}>
                                                <h3 className={styles.reviewerName}>{review.name}</h3>
                                                <p className={styles.reviewerDirection}>Напрямок: {review.direction}</p>
                                                <div className={styles.rating}>
                                                    {renderStars(review.rating)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.reviewComment} ${isEven ? styles.even : ''}`}>
                                            <p>{review.comment}</p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className={styles.noReviews}>
                                <p>Немає відгуків для обраного напрямку</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
};
