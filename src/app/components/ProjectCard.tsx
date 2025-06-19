'use client'

import { useState } from 'react'
import VideoModal from './VideoModal'
import ModalPortal from './ModalPortal'
interface ProjectProps {
  title: string
  category: string
  description: string
  image: string
  video?: string
  tech: string[]
  link?: string
  onWatchDemo?: () => void
}

export default function ProjectCard({ title, description, image, video, tech, link, onWatchDemo }: ProjectProps) {
  return (
    <div className="bg-[#1a1f37] rounded-lg overflow-hidden shadow-lg p-4 flex flex-col justify-between">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2 text-neon-green">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm mt-2 text-gray-400">
        {tech.map((t, i) => (
          <span key={i} className="bg-[#2a2f4a] px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-green underline text-sm hover:text-white"
        >
          GitHub →
        </a>
        {video && (
          <button
            onClick={onWatchDemo}
            className="text-sm text-black bg-neon-green px-3 py-1 rounded hover:scale-105 transition"
          >
            Watch Demo
          </button>
        )}
      </div>
    </div>
  )
}