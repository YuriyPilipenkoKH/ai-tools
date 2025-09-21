"use client"

import { chatClasses } from "@/models/chatClasses"
import { useState } from "react"


export default function CompletionPage () {
  const [prompt, setPrompt] = useState("") // state for input field
  const [completion, setCompletion] = useState("")// state for response from API
  const [isLoading, setIsLoading] = useState(false) // state for loading
  const [error, setError] = useState<string | null>(null) // state for error handling

  const complete = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setPrompt("")
    try {
      const response = await fetch('/api/completion', {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      setCompletion(data.text)
      } 
    catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.message || 'Something went wrong, please try again.')
      }
    }
    finally{
      setIsLoading(false)
    }

  }

  return (
    <div className='chat-container'>
        {error && <div className='chat-error'>{error}</div>}
        {isLoading ? (
            <div>Loading...</div>
          ) : completion ? (
            <div className={chatClasses.loading}>{completion}</div>
          ) : null}
      <form 
      onSubmit={complete}
      className='chat-form'>
        <div className='input-container'>
          <input 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text" 
          placeholder="how can I help You?"
          className='chat-input'/>
          <button type="submit"
           className='chat-button'>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}