'use client'

import { useState } from 'react'

export default function AITutor() {
  const [question, setQuestion] = useState('')

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">AI Tutor</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          placeholder="Ask your question..."
        />
        <button
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ask Question
        </button>
      </div>
    </div>
  )
}
