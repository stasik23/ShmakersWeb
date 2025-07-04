'use client'
import { Scene } from '@/components/scene'
import { Canvas } from '@react-three/fiber'
import { FaDiscord, FaPhone, FaTiktok } from 'react-icons/fa'
import styles from './main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background glow effects */}
      <div className={styles.backgroundGlow}></div>

      {/* Animated banner */}
      <div className={styles.banner}>
        <div className={styles.marquee}>
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className={styles.marqueeContent}>
              <span className={styles.promoTag}>ВАЙБОВИЙ СТАРТ</span>
              <span>😊 За промокодом VIBE отримай 30% знижку на перший місяць навчання</span>
              <span className={styles.separator}>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <div className={styles.logoContainer}>
              <img src="/Shmakers2DLogo.svg" alt="Shmakers Logo" className={styles.logo} />
            </div>
          </div>

          <div className={styles.navCenter}>
            <button className={styles.navButton}>
              <span>Курси</span>
              <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className={styles.navLink}>Переваги</a>
            <a href="#" className={styles.navLink}>Напрямки</a>
            <a href="#" className={styles.navLink}>Контакти</a>
          </div>

          <div className={styles.navRight}>
            <a href="#" className={styles.socialIcon}>
              <FaPhone className={styles.icon} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaDiscord className={styles.icon} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaTiktok className={styles.icon} />
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.textContainer}>
              <h1 className={styles.mainTitle}>
                Твоє нове життя<br />
                починається <span className={styles.highlightText}>зараз</span>
              </h1>

              <p className={styles.description}>
                З нами ти не зливаєшся — бо тут зрозуміло, навіщо ти вчишся.<br />
                В Shmakers завжди є ті, хто поруч. Прозоро, чесно, з вайбом.
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

          {/* 3D Scene */}
          <div className={styles.sceneContainer}>
            {/* Purple glow effect behind 3D model */}
            <div className={styles.sceneGlow}></div>

            <Canvas
              shadows
              camera={{
                position: [0, 0, 8],
                fov: 45
              }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}>
              <Scene />
            </Canvas>
          </div>
        </div>

      </div>
    </div>
  )
}