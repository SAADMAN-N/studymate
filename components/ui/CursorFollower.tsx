'use client'

import { useEffect, useState } from 'react'

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="fixed w-6 h-6 bg-blue-400 rounded-full pointer-events-none blur-sm transition-all duration-100 ease-out -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CursorFollower
