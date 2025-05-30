'use client'

import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const resumeItems = [
    {
      title: 'SUNY Plattsburgh',
      subtitle: 'B.S. Computer Science, GPA 3.96',
      date: 'Graduated May 2025',
      description: 'Engaged in student leadership, research, and software development projects.',
    },
    {
      title: 'Student Association Vice President',
      subtitle: 'SUNY Plattsburgh',
      date: 'Aug 2024– May 2025',
      description: 'Led campus initiatives, organized events, and represented student body.',
    },
    {
      title: 'Intern – Meso-American Landscapes',
      subtitle: 'Anthropology + GIS Department',
      date: 'Fall 2024',
      description:
        'Worked on language detection and geospatial analysis using ArcGIS and Python to map Mesoamerican trade networks.',
    },
    {
      title: 'Independent Study',
      subtitle: ' CUDA Parallel Algorithms',
      date: 'Summer 2023',
      description:
        'Developed GPU-accelerated prime sieve using CUDA to explore parallel computing efficiency.',
    },
    {
      title: 'TA – Calculus II ',
      subtitle: 'Thrive Scholars',
      date: 'Summer 2023',
      description:
        'Taught college-level Calculus to high-achieving high school seniors, enhancing their readiness for university coursework.',
    },
    {
      title: 'TA – Data Structures',
      subtitle: 'SUNY Plattsburgh',
      date: 'Fall 2024',
      description:
        'Guided students through course content, assignments, and coding exercises in Data Structures',
    },
    
    {
      title: 'MetaScan – Face Recognition Privacy Research',
      subtitle: 'Class Project',
      date: 'Spring 2025',
      description:
        'Developed a pipeline using OpenCV and reverse image search to study privacy implications of Meta glasses.',
    },
    {
      title: 'Mascot Madness',
      subtitle: 'Tech Startup VR Project',
      date: 'Spring 2024',
      description:
        'Led team to build a VR game in Unreal Engine using photogrammetry-based assets and C++.',
    },
    {
      title: 'AR Cemetery Heatmap App',
      subtitle: 'Research with Professor',
      date: 'Spring 2025',
      description:
        'Built Unity-based AR app overlaying ground-penetrating radar heatmap to identify cemetery burial sites.',
    },
    {
      title: 'Inventory Management System',
      subtitle: 'C++/Qt & PostgreSQL',
      date: 'Fall 2023',
      description:
        'Desktop application to manage warehouse inventory using Qt GUI and PostgreSQL backend.',
    },
    {
      title: 'Speech-to-Math Calculator',
      subtitle: 'Python Project',
      date: 'May 2025',
      description:
        'Voice-controlled calculator with Tkinter GUI to solve spoken math expressions with TTS feedback.',
    },
    {
      title: 'World Cup Live Scores',
      subtitle: 'Javascript Website',
      date: 'Fall 2022',
      description:
        'App to display live FIFA World Cup scores using a football API. Hosted on GitHub.',
    },
  ]

  return (
    <div className="bg-[#0c1121] text-white min-h-screen px-6 py-10 relative">
      {/* Back to Home */}
            <div className="mb-6">
        <Link
          href="/"
          className="inline-block text-neon-green border border-neon-green px-4 py-2 rounded hover:bg-neon-green hover:text-black transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-4">Resume</h1>

      {/* Download Resume */}
      <div className="text-center mb-8">
        <a
  href="/Sandes_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-neon-green text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  View Resume
</a>
      </div>

      {/* Timeline */}
      <div className="relative space-y-12 max-w-3xl mx-auto pl-8 border-l-4 border-neon-green ">
        {resumeItems.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="pl-6 relative"
          >
            <div className="absolute w-4 h-4 bg-neon-green rounded-full  top-1.5"
            style = {{left: '-41.5px'}}></div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-neon-green">{item.subtitle}</p>
            <p className="text-sm text-gray-400">{item.date}</p>
            <p className="mt-1 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
