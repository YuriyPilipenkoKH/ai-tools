"use client"
import { chatClasses } from "@/models/chatClasses";
import { useState } from "react"


function StructuredDataPage() {
  const [dishName, setDishName] = useState("");

  return (
     <div className={chatClasses.container}>
         <form 
        //  onSubmit={submit}
         className={chatClasses.form}>
        <input 
          placeholder="Enter a dish name..."
          className={chatClasses.input}/>
        <button
          className={chatClasses.button}
          type="submit">
          Grnerate</button>
      </form>
    </div>
  )
}

export default StructuredDataPage
