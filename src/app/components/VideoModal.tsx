'use client'

import { useEffect } from 'react'

type Props = {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ videoUrl, isOpen, onClose }: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-neon-green"
        aria-label="Close video modal"
      >
        ×
      </button>

      <div className="w-full max-w-4xl aspect-video">
        {videoUrl.includes('youtube.com') ? (
          <iframe
            src={videoUrl}
            title="Demo Video"
            className="w-full h-full rounded-md"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls className="w-full h-full rounded-md">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  )
}
