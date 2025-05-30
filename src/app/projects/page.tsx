'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projectData } from '../data/projectData'
import ProjectCard from '../components/ProjectCard'
import { createPortal } from 'react-dom'

const categories = ['All', ...new Set(projectData.map((p) => p.category))]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filtered = filter === 'All' ? projectData : projectData.filter((p) => p.category === filter)
  const visible = showAll ? filtered : filtered.slice(0, 6)

  return (
    <div className="min-h-screen bg-[#0c1121] text-white px-6 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-block text-neon-green border border-neon-green px-4 py-2 rounded hover:bg-neon-green hover:text-black transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center text-neon-green">All Projects</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => { setFilter(c); setShowAll(false) }}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              c === filter ? 'bg-neon-green text-black' : 'border-neon-green text-neon-green hover:bg-neon-green hover:text-black'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((proj, i) => (
          <ProjectCard key={i} {...proj} onWatchDemo={() => {if (proj.video) setSelectedVideo(proj.video)}} />
        ))}
      </div>

      {/* Show More Button */}
      {filtered.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-neon-green underline hover:text-white transition duration-200"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}

      {/* Video Modal */}
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
    </div>
  )
}
