'use client'
import { useState, useEffect } from 'react'
import { FaDiscord, FaPhone, FaTiktok, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from './mainsection.module.css'

export const MainSection = () => {
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
  const [isSecondaryButtonActive, setIsSecondaryButtonActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
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
                      <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
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