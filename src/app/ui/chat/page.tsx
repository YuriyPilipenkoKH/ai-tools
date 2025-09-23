"use client"
import { chatClasses } from "@/models/chatClasses"
import { useState } from "react"
import { useChat } from "@ai-sdk/react"

function ChatPage() {
    const [input, setInput] = useState("") 
    const { messages, sendMessage, status, error, stop }= useChat()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      sendMessage({ text: input });
      setInput("");
  };
  return (
     <div className={chatClasses.container}>
      {error && <div className={chatClasses.error}>{error.message}</div>}

      {messages.map((message) => (
        <div key={message.id} className="mb-4">
          <div className="font-semibold">
            {message.role === "user" ? "You:" : "AI:"}
          </div>
          {message.parts.map((part, index) => {
            switch (part.type) {
              case "text":
                return (
                  <div
                    key={`${message.id}-${index}`}
                    className="whitespace-pre-wrap"
                  >
                    {part.text}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      ))}

      {(status === "submitted" || status === "streaming") && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
          </div>
        </div>
      )}
         <form 
         onSubmit={submit}
         className={chatClasses.form}>
           <div className={chatClasses.inputContainer}>
             <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
             type="text" 
             placeholder="how can I help You?"
             className={chatClasses.input}/>
          {status === "submitted" || status === "streaming" ? (
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
              disabled={status !== "ready"}
            >
              Send
            </button>
          )}
           </div>
         </form>
       </div>
  )
}

export default ChatPage