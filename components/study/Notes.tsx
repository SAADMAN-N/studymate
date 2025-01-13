'use client'

import { useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState('')

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full h-48 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        placeholder="Take your notes here..."
      />
    </div>
  )
}
