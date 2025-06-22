'use client'
import { Scene } from '@/components/Scene'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-center py-2 text-sm relative z-20">
        <div className="animate-pulse">
          <span className="bg-white text-purple-600 px-2 py-1 rounded text-xs font-bold mr-2">ВАЙБОВИЙ СТАРТ</span>
          <span>😊 За промокодом VIBE отримай 30% знижку на перший місяць навчання</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 relative z-20">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">S</span>
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

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-purple-500 hover:text-purple-400 cursor-pointer transition-all hover:scale-110">
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.777-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.692.677-.692 1.654 0 .976.708 1.916.806 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.480 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-400 cursor-pointer transition-all hover:scale-110">
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-400 cursor-pointer transition-all hover:scale-110">
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
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

        {/* Right Side - Three.js Canvas */}
        <div className="flex-1 h-[85vh] relative">
          <Canvas
            shadows
            camera={{
              position: [0, 0, 2],
              fov: 10
            }}
            style={{ background: 'transparent' }}
          >
            <Scene />
          </Canvas>

          {/* Gradient overlays for better integration */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-900/20 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0.05) 40%, transparent 70%)'
            }}
          />
        </div>
      </div>

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #7c3aed 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #a855f7 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      </div>
  )
}