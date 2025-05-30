'use client'

import React from 'react'

export default function TimelineItem({ title, description, date, align = 'left' }: {
  title: string,
  description: string,
  date: string,
  align?: 'left' | 'right'
}) {
  const isLeft = align === 'left'

  return (
    <div className="w-full flex justify-between items-center mb-10 relative">
      {/* Left Side */}
      {isLeft && (
        <div className="w-5/12 text-right pr-4 hidden md:block">
          <div className="bg-[#1a1f37] p-4 rounded shadow-lg inline-block">
            <h3 className="text-xl font-bold text-neon-green">{title}</h3>
            <p className="text-gray-300">{description}</p>
            <p className="text-sm text-gray-400 mt-1">{date}</p>
          </div>
        </div>
      )}

      {/* Center Line + Dot */}
      <div className="w-2 md:w-1 relative z-10">
        <div className="h-full w-1 bg-neon-green mx-auto"></div>
        <div className="w-5 h-5 bg-neon-green rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
      </div>

      {/* Right Side */}
      {!isLeft && (
        <div className="w-5/12 pl-4 hidden md:block">
          <div className="bg-[#1a1f37] p-4 rounded shadow-lg inline-block">
            <h3 className="text-xl font-bold text-neon-green">{title}</h3>
            <p className="text-gray-300">{description}</p>
            <p className="text-sm text-gray-400 mt-1">{date}</p>
          </div>
        </div>
      )}

      {/* Mobile View - Always show below */}
      <div className="md:hidden w-full mt-4">
        <div className="bg-[#1a1f37] p-4 rounded shadow-lg">
          <h3 className="text-xl font-bold text-neon-green">{title}</h3>
          <p className="text-gray-300">{description}</p>
          <p className="text-sm text-gray-400 mt-1">{date}</p>
        </div>
      </div>
    </div>
  )
}
