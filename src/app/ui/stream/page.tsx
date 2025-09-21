"use client"

import { chatClasses } from "@/models/chatClasses"
import { useCompletion } from "@ai-sdk/react"

function StreamPage() {
  
    const {
      input, 
      handleInputChange,
      completion,
      isLoading,
      handleSubmit,
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
          placeholder="Ask me anything..."
          className={chatClasses.input}/>
          {isLoading ? (
            <button
              onClick={stop}
              className={chatClasses.stopButton}
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              className={chatClasses.button}
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