"use client"

import { useState } from "react"

export default function CompletionPage () {
  const [prompt, setPrompt] = useState("") // state for input field
  const [completion, setCompletion] = useState("")// state for response from API
  const [isLoading, setIsLoading] = useState(false) // state for loading

  const complete = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setCompletion("")

  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <form className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-lg">
        <div className="flex gap-2">
          <input 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text" 
          placeholder="how can I help You?"
          className="flex-1 dark:bg-zinc-800 p-2 border border-zinc-300 dark:border-zinc-700 rounded shadow-xl"/>
          <button type="submit"
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Send</button>
        </div>
      </form>
    </div>
  )
}