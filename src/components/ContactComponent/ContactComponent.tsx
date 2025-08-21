import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FieldErrors, useForm } from 'react-hook-form';
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

    const onInvalid = (err: FieldErrors<FormData>) => {
        console.log('⛔ Помилки валідації:', err);
        setSubmitStatus('error');
        const firstError = Object.values(err)[0];
        setErrorMessage(
            (typeof firstError?.message === 'string' && firstError.message) ||
            'Перевірте поля форми.'
        );
    };

    const onSubmit = async (data: FormData) => {
        setSubmitStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('https://telegram-bot-topaz-one.vercel.app/api/process-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const text = await response.text();
                console.error('Server returned non-JSON:', text);
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            console.log('✅ Form successfully submitted!', result);

            setSubmitStatus('success');
            reset();

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (err) {
            console.error('❌ Error submitting form:', err);
            setSubmitStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Помилка при відправці форми. Спробуйте ще раз.');
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
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Залишились запитання?
            </motion.h1>

            <div className={styles.grid}>
                <motion.div
                    className={styles.form}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                    <h2 className={styles.formTitle}>Заявка на дзвінок</h2>
                    <form className={styles.formContent} onSubmit={handleSubmit(onSubmit, onInvalid)}>
                        {/* Input Group */}
                        <div className={styles.inputGroup}>
                            <input
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                placeholder="Запитайте Менеджера"
                                // disabled={isSubmitting}
                                {...register('name', validationRules.name)}
                            />
                            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                            <input
                                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                                placeholder="Номер Телефону"
                                // disabled={isSubmitting}
                                {...register('phone', validationRules.phone)}
                            />
                            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                            <textarea
                                className={`${styles.textarea} ${errors.message ? styles.textareaError : ''}`}
                                rows={3}
                                placeholder="Коментар"
                                // disabled={isSubmitting}
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
                                    {...register('agreeToDataProcessing', { required: "Потрібно погодитися на обробку даних" })}
                                />
                                <label htmlFor="agreeToDataProcessing" className={styles.checkboxLabel}>
                                    Згоден на обробку даних
                                </label>
                                {errors.agreeToDataProcessing && (
                                    <span className={styles.error}>{errors.agreeToDataProcessing.message as string}</span>
                                )}
                            </div>
                            <p className={styles.disclaimer}>
                                *Ви можете повернути кошти за перші 4 уроки або продовжити навчання
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" onClick={handleSubmit(onSubmit, onInvalid)} disabled={isSubmitting} className={styles.submitBtn}>
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
                </motion.div>

                <div className={styles.pricing}>
                    {/* Group Classes Card */}
                    <motion.div
                        className={`${styles.card} ${isMobile && expandedCards.has('group') ? styles.expanded : ''}`}
                        onClick={() => isMobile && toggleCardExpansion('group')}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    >
                        {isMobile ? (
                            <div className={styles.content}>
                                <img src="/image.svg" alt="Individual classes" className={styles.image} />
                                <div className={styles.heading_back}>
                                    <h1 className={styles.cardTitle}>Індивідуальні заняття</h1>
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
                    </motion.div>

                    {/* Individual Classes Card */}
                    <motion.div
                        className={`${styles.card} ${isMobile && expandedCards.has('individual') ? styles.expanded : ''}`}
                        onClick={() => isMobile && toggleCardExpansion('individual')}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                    >
                        {isMobile ? (
                            <div className={styles.content}>
                                <img src="/groupimage.svg" alt="Group classes" className={styles.image} />
                                <div className={styles.heading_back}>
                                    <h1 className={styles.cardTitle}>Групові заняття</h1>
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
                                            Групові заняття
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
