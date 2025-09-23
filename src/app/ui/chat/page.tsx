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
             <button type="submit"
              className={chatClasses.button}>
               Send
             </button>
           </div>
         </form>
       </div>
  )
}

export default ChatPage