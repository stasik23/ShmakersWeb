'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './mainsection.module.css'

export const MainSection = () => {

  const [isSecondaryButtonActive, setIsSecondaryButtonActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 440);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSecondaryButtonClick = () => {
    setIsSecondaryButtonActive(true);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки
    console.log('Отправлено:', inputValue);
    setInputValue('');
    setIsSecondaryButtonActive(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };



  //TODO АНИМКИ ДЛЯ ОТЗЫВОВ И ПРОКТОВ НЕ ДЕЛАТЬ, ПОКАЧТО + АНИМКИ В ЦЕЛОМ НА ПОТОМ + ДРОПДАУН МЕНЮ ДОПИЛИТЬ + СДЕЛАТЬ FLEXIBLE
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {!isMobile ? (
            <>
              <div className={styles.leftContent}>
                <div className={styles.textContainer}>
                  <motion.h1
                    className={styles.mainTitle}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                  >
                    Твоє нове життя починається{' '}
                    <motion.span
                      className={styles.highlightText}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
                    >
                      зараз
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.4, ease: "easeOut" }}
                  >
                    З нами ти знайдеш свій старт та дійдеш до фінішу. В
                    Shmakers завжди є ті, хто поруч. Прозоро, чесно,
                    з вайбом.
                  </motion.p>
                </div>
                <motion.div
                  className={styles.buttonContainer}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
                >
                  <button className={styles.primaryButton}>
                    <span className={styles.buttonText}>Обрати напрямок</span>
                    <div className={styles.buttonOverlay}></div>
                  </button>

                  <div className={styles.secondaryButtonContainer}>
                    {!isSecondaryButtonActive ? (
                      <button
                        className={styles.secondaryButton}
                        onClick={handleSecondaryButtonClick}
                      >
                        <img src="/icon-form.svg" alt="Отправить" className={styles.buttonIcon} />
                        <span>Запитайте менеджера</span>
                      </button>
                    ) : (
                      <form onSubmit={handleInputSubmit} className={styles.inputForm}>
                        <div className={styles.inputWrapper}>
                          <img src="/icon-form.svg" alt="Отправить" className={styles.buttonIcon} />
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Як записатись на пробний урок?"
                            className={styles.secondaryInput}
                            autoFocus
                          />
                        </div>
                        <button type="submit" className={styles.vectorbox}>
                          <img className={styles.mngVector} src="/Vector.svg" alt="Отправить" />
                        </button>
                      </form>
                    )}
                    {!isSecondaryButtonActive && (
                      <button type="submit" className={styles.vectorbox}>
                        <img className={styles.mngVector} src="/Vector.svg" alt="Отправить" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className={styles.sceneContainer}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
              >
                <div className={styles.sceneGlow}></div>
                <img className={styles.Logo3D} src="/Logo3D.svg" alt="Shmakers 3D Logo" />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              >
                <motion.h1
                  className={styles.mainTitle}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                >
                  Твоє нове життя починається{' '}
                  <motion.span
                    className={styles.highlightText}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
                  >
                    зараз
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.div
                className={styles.sceneContainer}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
              >
                <img className={styles.Logo3D} src="/Logo3D.svg" alt="Shmakers 3D Logo" />
              </motion.div>

              <motion.div
                className={styles.descriptionSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.4, ease: "easeOut" }}
              >
                <p className={styles.description}>
                  З нами ти знайдеш свій старт та дійдеш до фінішу. В
                  Shmakers завжди є ті, хто поруч. Прозоро, чесно,
                  з вайбом.
                </p>

                <motion.div
                  className={styles.buttonContainer}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
                >
                  <button className={styles.primaryButton}>
                    <span className={styles.buttonText}>Обрати напрямок</span>
                  </button>

                  <div className={styles.secondaryButtonContainer}>
                    <button className={styles.secondaryButton}>
                      <img src="/icon-form.svg" className={styles.buttonIcon} alt="Отправить" />
                      <span>Запитайте менеджера</span>
                    </button>
                    <button className={styles.vectorbox}>
                      <img className={styles.mngVector} src="/Vector.svg" alt="Отправить" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}