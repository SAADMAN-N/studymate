'use client'

import { useState, useEffect } from 'react'

export default function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false)
            setMinutes(25)
            return
          }
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, minutes, seconds])

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Pomodoro Timer</h2>
      <div className="text-4xl font-mono text-center mb-4">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  )
}
