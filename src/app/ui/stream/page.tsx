"use client"

import { chatClasses } from "@/models/chatClasses"
import { useState } from "react"
import { useCompletion } from "@ai-sdk/react"

function StreamPage() {
    const [prompt, setPrompt] = useState("") // state for input field

  
    const {
      input, 
      handleInputChange,
      handleSubmit,
      completion,
      isLoading,
      error,
    }= useCompletion({
      api: '/api/stream',
    })

    // const complete = async (e: React.FormEvent) => {
    //   e.preventDefault()
    //   setIsLoading(true)
    //   setCompletion("")
    //   setPrompt("")   
    //   setError(null)   
    //   try {
    //     const response = await fetch('/api/stream', {
    //       method: 'POST',
    //       headers: {  'Content-Type': 'application/json' },
    //       body: JSON.stringify({ prompt })
    //     })
    //     const data = await response.json()
    //     if (!response.ok) {
    //       throw new Error(data.error || 'Something went wrong')
    //     }
    //     setCompletion(data.text)
    //     } 
    //   catch (error) {
    //     console.log(error);
    //     if (error instanceof Error) {
    //       setError(error.message || 'Something went wrong, please try again.')
    //     }
    //   }
    //   finally{
    //     setIsLoading(false)
    //   }
  
    // }
  
  return (
    <div className={chatClasses.container}>
      {error && <div className={chatClasses.error}>{error.message}</div>}
      {isLoading && !completion && <div>Loading...</div>}
      {completion && <div className="whitespace-pre-wrap">{completion}</div>}

      <form 
      onSubmit={handleSubmit}
      className={chatClasses.form}>
        <div className={chatClasses.inputContainer}>
          <input 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text" 
          placeholder="how can I help You?"
          className={chatClasses.input}/>
          <button 
            type="submit"
            className={chatClasses.streamButton}
            disabled={isLoading}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default StreamPage