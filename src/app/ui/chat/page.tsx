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
           {/* {error && <div className={chatClasses.error}>{error}</div>} */}
           {/* {isLoading ? (
               <div>Loading...</div>
             ) : completion ? (
               <div className={chatClasses.loading}>{completion}</div>
             ) : null} */}
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