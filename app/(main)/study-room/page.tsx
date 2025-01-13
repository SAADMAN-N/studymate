'use client'

import { useAuth } from '../../../hooks/useAuth'
import TodoList from '../../../components/study/TodoList'
import PomodoroTimer from '../../../components/study/PomodoroTimer'
import AITutor from '../../../components/study/AITutor'
import Notes from '../../../components/study/Notes'
import { useState } from 'react'

const StudyRoom = () => {
  const { isAuthenticated } = useAuth()
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Please sign in to access the study room</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Study Room</h1>
      
      {/* Video Section */}
      <div className="mb-8 bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
        <p className="text-gray-400">Video window will appear here</p>
      </div>

      {/* Study Partner Matching */}
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Find Study Partners</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTag()}
            placeholder="Add subjects or interests (e.g., Math, Physics)"
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            onClick={addTag}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center gap-2"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="hover:text-blue-600"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Study Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Notes />
          <AITutor />
        </div>
        <div className="space-y-6">
          <TodoList />
          <PomodoroTimer />
        </div>
      </div>
    </div>
  )
}

export default StudyRoom
