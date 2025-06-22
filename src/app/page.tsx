'use client'
import { Scene } from '@/components/Scene'
import { Canvas } from '@react-three/fiber'
import { FaDiscord, FaPhone, FaTiktok } from 'react-icons/fa'
// import Shmakers2DLogo from '../../public/Shmakers2DLogo.svg'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#222222] text-white overflow-hidden">

      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-sm text-white py-2 relative z-20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-4 font-manrope">
              <span className="bg-white text-purple-600 px-2 py-1 rounded text-xs font-bold">ВАЙБОВИЙ СТАРТ</span>
              <span>😊 За промокодом VIBE отримай 30% знижку на перший місяць навчання</span>
              <span className="mx-4">•</span>
            </div>
          ))}
        </div>
      </div>

      <nav className="flex items-center justify-between px-8 py-6 relative z-20">
        <div className="flex items-center">
          <div className="flex items-center justify-center shadow-lg">
            <img src="/Shmakers2DLogo.svg" alt="Shmakers Logo" className="w-[24px] h-[36px]" />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 group">
            <span>Курси</span>
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Переваги</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Напрямки</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Контакти</a>
        </div>

        <div className="flex items-center justify-center gap-[22px] px-[22px] w-[124px] h-[36px]">
          <a href="#" className="text-purple-500 hover:text-purple-400 cursor-pointer transition-all hover:scale-110">
            <FaPhone className="w-5 h-5" />
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-400 cursor-pointer transition-all hover:scale-110">
            <FaDiscord className='w-5 h-5' />
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-400 cursor-pointer transition-all hover:scale-110">
            <FaTiktok className='w-5 h-5' />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center min-h-[85vh] relative">
        {/* Left Content */}
        <div className="flex-1 px-8 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Твоє нове життя<br />
              починається <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">зараз</span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              З нами ти не зливаєшся — бо тут зрозуміло, навіщо ти вчишся.<br />
              В Shmakers завжди є ті, хто поруч. Прозоро, чесно, з вайбом.
            </p>

            <div className="space-y-4">
              <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden">
                <span className="relative z-10">Обрати напрямок</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Запитайте менеджера</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 h-[85vh] relative">
          <Canvas
            shadows
            camera={{
              position: [0, 0, 2],
              fov: 10
            }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </div>
  )
}