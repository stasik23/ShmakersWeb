import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './contact.module.css';

interface FormData {
    name: string;
    phone: string;
    message: string;
    agreeToDataProcessing: boolean;
}

export const ContactComponent = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
    const [isMobile, setIsMobile] = useState(false);

    // Проверяем размер экрана при загрузке и изменении
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 440);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>();



    const onSubmit = async (data: FormData) => {
        setSubmitStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:3000/process-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }

            const result = await response.json();
            console.log('Form successfully submitted!', result);
            setSubmitStatus('success');
            reset();

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');

            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('Помилка при відправці форми. Спробуйте ще раз.');
            }
        }
    };

    const toggleCardExpansion = (cardId: string) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(cardId)) {
                newSet.delete(cardId);
            } else {
                newSet.add(cardId);
            }
            return newSet;
        });
    };

    const validationRules = {
        name: {
            required: "Ім'я є обов'язковим полем",
            minLength: {
                value: 2,
                message: "Ім'я повинно містити принаймні 2 символи"
            },
            maxLength: {
                value: 50,
                message: "Ім'я не може перевищувати 50 символів"
            },
            pattern: {
                value: /^[a-zA-Zа-яА-ЯёЁії''\s-]+$/,
                message: "Ім'я може містити лише літери, апостроф, дефіс та пробіли"
            }
        },
        phone: {
            required: "Номер телефону є обов'язковим полем",
            pattern: {
                value: /^(\+38|38|8)?[\s\-]?\(?0\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
                message: "Невірний формат номера телефону. Приклад: +38 (099) 123-45-67"
            }
        },
        message: {
            maxLength: {
                value: 500,
                message: "Повідомлення не може перевищувати 500 символів"
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Залишились запитання?</h1>

            <div className={styles.grid}>
                <div className={styles.form}>
                    <h2 className={styles.formTitle}>Заявка на дзвінок</h2>
                    <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
                        {/* Input Group */}
                        <div className={styles.inputGroup}>
                            <input
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                placeholder="Запитайте Менеджера"
                                disabled={isSubmitting}
                                {...register('name', validationRules.name)}
                            />
                            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                            <input
                                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                                placeholder="Номер Телефону"
                                disabled={isSubmitting}
                                {...register('phone', validationRules.phone)}
                            />
                            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                            <textarea
                                className={`${styles.textarea} ${errors.message ? styles.textareaError : ''}`}
                                rows={3}
                                placeholder="Коментар"
                                disabled={isSubmitting}
                                {...register('message', validationRules.message)}
                            />
                            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                        </div>

                        {/* Checkbox and Disclaimer Container */}
                        <div className={styles.checkboxContainer}>
                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="agreeToDataProcessing"
                                    className={styles.checkbox}
                                    disabled={isSubmitting}
                                    {...register('agreeToDataProcessing', { required: "Потрібно погодитися на обробку даних" })}
                                />
                                <label htmlFor="agreeToDataProcessing" className={styles.checkboxLabel}>
                                    Згоден на обробку даних
                                </label>
                            </div>
                            <p className={styles.disclaimer}>
                                *Ви можете повернути кошти за перші 4 уроки або продовжити навчання
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            {submitStatus === 'loading' ? 'Відправляється...' : 'Надіслати'}
                        </button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className={styles.successMessage}>
                                ✅ Форма успішно відправлена! Ми зв&apos;яжемося з вами найближчим часом.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className={styles.errorMessage}>
                                ❌ {errorMessage || 'Помилка при відправці форми. Спробуйте ще раз.'}
                            </div>
                        )}
                    </form>
                </div>

                <div className={styles.pricing}>
                    {/* Group Classes Card */}
                    <div
                        className={`${styles.card} ${isMobile && expandedCards.has('group') ? styles.expanded : ''}`}
                        onClick={() => isMobile && toggleCardExpansion('group')}
                    >
                        {isMobile ? (
                            <div className={styles.content}>
                                <img src="/image.svg" alt="Group classes" className={styles.image} />
                                <div className={styles.heading_back}>
                                    <h1 className={styles.cardTitle}>Групові заняття</h1>
                                    <div className={styles.arrowIcon}>
                                        {expandedCards.has('group') ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>
                                <div className={`${styles.details} ${expandedCards.has('group') ? styles.showDetails : ''}`}>
                                    <div className={styles.pricingInfo}>
                                        <p className={styles.price}>500 грн. за годину</p>
                                        <p className={styles.price}>1 год. тривалість уроку</p>
                                        <p className={styles.price}>4 уроки на місяць</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.cardContent}>
                                <div className={styles.cardText}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.cardTitle}>
                                            Групові заняття
                                        </h3>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <div className={styles.pricingInfo}>
                                            <p className={styles.price}>500 грн. за годину</p>
                                            <p className={styles.price}>1 год. тривалість уроку</p>
                                            <p className={styles.price}>4 уроки на місяць</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardImage}>
                                    <img
                                        src="/image.svg"
                                        alt="Group classes"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Individual Classes Card */}
                    <div
                        className={`${styles.card} ${isMobile && expandedCards.has('individual') ? styles.expanded : ''}`}
                        onClick={() => isMobile && toggleCardExpansion('individual')}
                    >
                        {isMobile ? (
                            <div className={styles.content}>
                                <img src="/image.svg" alt="Individual classes" className={styles.image} />
                                <div className={styles.heading_back}>
                                    <h1 className={styles.cardTitle}>Індивідуальні заняття</h1>
                                    <div className={styles.arrowIcon}>
                                        {expandedCards.has('individual') ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>
                                <div className={`${styles.details} ${expandedCards.has('individual') ? styles.showDetails : ''}`}>
                                    <div className={styles.pricingInfo}>
                                        <p className={styles.price}>250 грн. за годину</p>
                                        <p className={styles.price}>1 год. тривалість уроку</p>
                                        <p className={styles.price}>4 уроки на місяць</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.cardContent}>
                                <div className={styles.cardText}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.cardTitle}>
                                            Індивідуальні заняття
                                        </h3>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <div className={styles.pricingInfo}>
                                            <p className={styles.price}>250 грн. за годину</p>
                                            <p className={styles.price}>1 год. тривалість уроку</p>
                                            <p className={styles.price}>4 уроки на місяць</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardImage}>
                                    <img
                                        src="/image.svg"
                                        alt="Individual classes"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
