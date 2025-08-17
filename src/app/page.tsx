'use client'
 //TODO АНИМКИ ДЛЯ ОТЗЫВОВ И ПРОКТОВ НЕ ДЕЛАТЬ, ПОКАЧТО + АНИМКИ В ЦЕЛОМ НА ПОТОМ + ДРОПДАУН МЕНЮ ДОПИЛИТЬ + РЕЧЕК РАЗМЕРОВ И ТД.
import { useState } from 'react'
import { FaDiscord, FaPhone, FaTiktok, FaBars } from 'react-icons/fa'
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

  const scrollCourses = (direction: 'left' | 'right') => {
    const coursesList = document.querySelector('.coursesList') as HTMLElement;
    if (coursesList) {
      const scrollAmount = 200;
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
                  <div className={styles.coursesList}>
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
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <FaBars />
            </button>
          </div>
        </nav>
        
        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            <div className={styles.textContainer}>
              <h1 className={styles.mainTitle}>
                Твоє нове життя <br/> починається <span className={styles.highlightText}>зараз</span>
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

                <button className={styles.secondaryButton}>
                  <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Запитайте менеджера</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.sceneContainer}>
            <div className={styles.sceneGlow}></div>
            <img className={styles.Logo3D} src="/Logo3D.svg" alt="Shmakers 3D Logo" />
          </div>
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