'use client'

import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className="bg-[#0c1121] text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Left: Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-neon-green">Sandesh Poudel</span>
          </h1>

          <div className="text-xl text-neon-green font-medium min-h-[30px]">
            <Typewriter
              options={{
                strings: [
  'Software Engineer & Creative Technologist',
  'Builder of Smart Interfaces & Intelligent Systems',
  'VR/AR Developer & Machine Learning Enthusiast',
  'Full Stack Engineer with a Vision for Impact'
],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p className="text-md text-gray-400">
            CS grad building intelligent, real-world tools — from AR maps to AI-powered assistants. 
            Looking for software engineering roles where I can grow and make an impact.
          </p>

          <button
            onClick={() => {
              const section = document.getElementById('projects')
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="mt-4 px-6 py-3 bg-neon-green text-black font-semibold rounded-full shadow-neonGreen hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
        </div>

        {/* Right: Large responsive profile circle */}
        <div className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px] aspect-square flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-[#1a1f37] border-2 border-[#00FFAB] 
                          shadow-[0_0_40px_#00FFAB40] hover:shadow-[0_0_60px_#00FFAB80] 
                          transition-all duration-300 hover:scale-105 overflow-hidden">
            <Image
              src="/profile.png"
              alt="Sandesh Poudel"
              fill
              className="object-top object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
