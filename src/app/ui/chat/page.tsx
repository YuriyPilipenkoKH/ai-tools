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
      {(status === "submitted" || status === "streaming") && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
          </div>
        </div>
      )}
         <form 
        //  onSubmit={complete}
         className={chatClasses.form}>
           <div className={chatClasses.inputContainer}>
             <input 
            //  value={prompt}
            //  onChange={(e) => setPrompt(e.target.value)}
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