'use client'
//TODO АНИМКИ ДЛЯ ОТЗЫВОВ И ПРОКТОВ НЕ ДЕЛАТЬ, ПОКАЧТО + АНИМКИ В ЦЕЛОМ НА ПОТОМ + ДРОПДАУН МЕНЮ ДОПИЛИТЬ + РЕЧЕК РАЗМЕРОВ И ТД.
import { useState, useEffect } from 'react'
import { FaDiscord, FaPhone, FaTiktok, FaBars, FaTimes } from 'react-icons/fa'
import styles from './main.module.css'
import { StepsGrid } from '@/components/StepsGrid'
import { DirectionsComp } from '@/components/Directions'
import { StudentProjects } from '@/components/StudProjectComponent/StudProjects'
import { FeedbackComp } from '@/components/FeedbackComp'
import { ContactComponent } from '@/components/ContactComponent'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
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
        <div className={styles.banner}>
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
        </div>

        <nav className={styles.nav}>
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
            <a href="#" className={styles.socialIcon} aria-label="Phone">
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
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileMenuLogo}>
                <img src="/section.svg" alt="Shmakers Logo" className={styles.mobileMenuLogoIcon} />
              </div>
              <div className={styles.mobileMenuIcons}>
                <a href="#" className={styles.mobileMenuPhone}>
                  <FaPhone />
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
                  <h1 className={styles.mainTitle}>
                    Твоє нове життя <br /> починається <span className={styles.highlightText}>зараз</span>
                  </h1>

                  <p className={styles.description}>
                    З нами ти знайдеш свій старт та дійдеш до фінішу. В
                    Shmakers завжди є ті, хто поруч. Прозоро, чесно,
                    з вайбом.
                  </p>

                  <div className={styles.buttonContainer}>
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
                          <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>Запитайте менеджера</span>
                        </button>
                      ) : (
                        <form onSubmit={handleInputSubmit} className={styles.inputForm}>
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Як записатись на пробний урок?"
                            className={styles.secondaryInput}
                            autoFocus
                          />
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
                  </div>
                </div>
              </div>

              <div className={styles.sceneContainer}>
                <div className={styles.sceneGlow}></div>
                <img className={styles.Logo3D} src="/Logo3D.svg" alt="Shmakers 3D Logo" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>
                  Твоє нове життя починається <span className={styles.highlightText}>зараз</span>
                </h1>
              </div>

              <div className={styles.sceneContainer}>
                <img className={styles.Logo3D} src="/Logo3D.svg" alt="Shmakers 3D Logo" />
              </div>

              <div className={styles.descriptionSection}>
                <p className={styles.description}>
                  З нами ти знайдеш свій старт та дійдеш до фінішу. В
                  Shmakers завжди є ті, хто поруч. Прозоро, чесно,
                  з вайбом.
                </p>

                <div className={styles.buttonContainer}>
                  <button className={styles.primaryButton}>
                    <span className={styles.buttonText}>Обрати напрямок</span>
                  </button>

                  <div className={styles.secondaryButtonContainer}>
                    <button className={styles.secondaryButton}>
                      <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Запитайте менеджера</span>
                    </button>
                    <button className={styles.vectorbox}>
                      <img className={styles.mngVector} src="/Vector.svg" alt="Отправить" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <StepsGrid />
        <div className={styles.wrapper}>
          <DirectionsComp />
          <StudentProjects />
          <FeedbackComp />
          <ContactComponent />
        </div>
      </div>
      <Footer />
    </div>
  )
}