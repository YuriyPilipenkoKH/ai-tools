"use client"
import { chatClasses } from "@/models/chatClasses";
import { useState } from "react"
import { experimental_useObject as useObject} from "@ai-sdk/react";
import { recipeSchema } from "@/app/api/structured-data/schems";


function StructuredDataPage() {
  const [dishName, setDishName] = useState("");
  const recipe = useObject({
    api: "/api/structured-data",
    schema: recipeSchema, 

  });
  return (
     <div className={chatClasses.container}>
      <form 
        //  onSubmit={submit}
        className={chatClasses.form}>
        <div className={chatClasses.inputContainer}>
          <input 
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="Enter a dish name..."
            className={chatClasses.input}/>
          <button
            className={chatClasses.button}
            type="submit">
            Grnerate</button>
        </div>
      </form>
    </div>
  )
}

export default StructuredDataPage
