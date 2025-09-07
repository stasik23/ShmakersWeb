'use client'
//TODO АНИМКИ ДЛЯ ОТЗЫВОВ И ПРОКТОВ НЕ ДЕЛАТЬ, ПОКАЧТО + АНИМКИ В ЦЕЛОМ НА ПОТОМ + ДРОПДАУН МЕНЮ ДОПИЛИТЬ + РЕЧЕК РАЗМЕРОВ И ТД.
import styles from './main.module.css'
import { StepsGrid } from '@/components/StepsGrid'
import { DirectionsComp } from '@/components/Directions'
import { StudentProjects } from '@/components/StudProjectComponent/StudProjects'
import { FeedbackComp } from '@/components/FeedbackComp'
import { ContactComponent } from '@/components/ContactComponent'
import { Footer } from '@/components/Footer/Footer'
import { MainSection } from '@/components/MainSection'
import { NavBar } from '@/components/Navbar'

export default function Home() {

  //TODO АНИМКИ ДЛЯ ОТЗЫВОВ И ПРОКТОВ НЕ ДЕЛАТЬ, ПОКАЧТО + АНИМКИ В ЦЕЛОМ НА ПОТОМ + ДРОПДАУН МЕНЮ ДОПИЛИТЬ + СДЕЛАТЬ FLEXIBLE
  return (
    <div className={styles.app}>
      <NavBar />
      <div>
        <div className={styles.wrapper}>
          <MainSection />
          <StepsGrid />
          <DirectionsComp />
          <StudentProjects />
          <FeedbackComp />
          <ContactComponent />
        </div>
      </div>
      <Footer />
    </div >
  )
}