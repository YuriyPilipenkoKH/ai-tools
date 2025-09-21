"use client"

import { chatClasses } from "@/models/chatClasses"
import { useCompletion } from "@ai-sdk/react"

function StreamPage() {
  
    const {
      input, 
      handleInputChange,
      handleSubmit,
      completion,
      isLoading,
      error,
      stop,
      setInput,
    }= useCompletion({
      api: '/api/stream',
    })

    const submit = async (e: React.FormEvent) => {
      e.preventDefault()
      setInput(""); // temporary fix to clear the input after submission
      handleSubmit(e);
      }
  
  return (
    <div className={chatClasses.container}>
      {error && <div className={chatClasses.error}>{error.message}</div>}
      {isLoading && !completion && <div>Loading...</div>}
      {completion && <div className="whitespace-pre-wrap">{completion}</div>}

      <form 
      onSubmit={submit}
      className={chatClasses.form}>
        <div className={chatClasses.inputContainer}>
          <input 
            value={input}
            onChange={handleInputChange}
          type="text" 
          placeholder="how can I help You?"
          className={chatClasses.input}/>
          {isLoading ? (
            <button
              onClick={stop}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default StreamPage