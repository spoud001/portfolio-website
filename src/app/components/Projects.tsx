'use client'

import { useState } from 'react'
import { projectData } from '../data/projectData'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { createPortal } from 'react-dom'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const handlePrev = () => {
    if (currentIndex >= 3) setCurrentIndex(currentIndex - 3)
  }

  const handleNext = () => {
    if (currentIndex + 3 < projectData.length) setCurrentIndex(currentIndex + 3)
  }

  const visibleProjects = projectData.slice(currentIndex, currentIndex + 3)

  return (
    <section id="projects" className="py-12 px-4 relative bg-[#0c1121] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>

      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 z-10 text-neon-green hover:text-white transition text-3xl"
        >
          <FaChevronLeft />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={i}
              {...project}
              onWatchDemo={() => setSelectedVideo(project.video ?? null)}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex + 3 >= projectData.length}
          className="absolute right-0 z-10 text-neon-green hover:text-white transition text-3xl"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="mt-8 text-center">
        <Link href="/projects">
          <button className="text-neon-green underline text-lg hover:text-white transition-all">
            View All Projects →
          </button>
        </Link>
      </div>

      {/* Video Modal (uses portal for body rendering) */}
      {selectedVideo &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-[90%] max-w-3xl aspect-video bg-black">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full text-sm font-bold z-10 hover:scale-105"
              >
                ✕
              </button>

              {selectedVideo.includes('youtube.com') || selectedVideo.includes('youtu.be') ? (
                <iframe
                  className="w-full h-full rounded"
                  src={selectedVideo}
                  title="Project Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video src={selectedVideo} controls autoPlay className="w-full h-full rounded" />
              )}
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
