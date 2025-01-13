'use client'

import { useState, useEffect, useRef } from 'react'

const ProcessFlow = () => {
  const [currentStep, setCurrentStep] = useState(-1) // Start at -1 so no step is shown initially
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          setCurrentStep(0) // Start animation when component becomes visible
        }
      },
      {
        threshold: 0.3 // Trigger when 30% of the component is visible
      }
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (isVisible && currentStep >= 0) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev === 3) {
            setShowAll(true)
            clearInterval(timer)
            return prev
          }
          return prev + 1
        })
      }, 2000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isVisible, currentStep])

  const steps = [
    {
      number: 1,
      title: "Find Your Match",
      description: "Choose your subjects, set your goals, and get matched with the perfect study partner in seconds."
    },
    {
      number: 2,
      title: "Start Your Session",
      description: "Join a distraction-free video study room with built-in productivity tools and AI assistance."
    },
    {
      number: 3,
      title: "Stay Productive",
      description: "Use our smart timer, shared notes, and AI tutor to make the most of your study time."
    },
    {
      number: 4,
      title: "Track Progress",
      description: "Monitor your study streaks, earn achievements, and celebrate your academic success."
    }
  ]

  return (
    <div 
      ref={componentRef}
      className={`transition-all duration-1000 ${showAll ? 'scale-100' : 'scale-110'}`}
    >
      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Animated Dots */}
        {steps.map((_, index) => (
          index < steps.length - 1 && (
            <div 
              key={`dot-${index}`}
              className="hidden md:block absolute top-8"
              style={{
                left: `calc(${25 * (index + 1)}% - 1rem)`,
              }}
            >
              {/* Animated Dot */}
              <div 
                className={`w-2 h-2 bg-blue-400 rounded-full
                  ${index <= currentStep - 1 ? 'animate-slide-dot' : 'opacity-0'}
                `}
              />
            </div>
          )
        ))}

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`text-center transition-all duration-500 transform relative
              ${index <= currentStep ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              ${showAll ? 'scale-100' : index === currentStep ? 'scale-110' : 'scale-95'}
            `}
          >
            <div className="bg-blue-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
              <span className="text-2xl text-blue-400">{step.number}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProcessFlow
