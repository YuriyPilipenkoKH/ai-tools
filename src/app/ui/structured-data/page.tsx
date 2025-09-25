"use client"
import { chatClasses } from "@/models/chatClasses";
import { useState } from "react"
import { experimental_useObject as useObject} from "@ai-sdk/react";
import { recipeSchema } from "@/app/api/structured-data/schems";


function StructuredDataPage() {
  const [dishName, setDishName] = useState("");

   const { submit, object, isLoading, error, stop } = useObject({
    api: "/api/structured-data",
    schema: recipeSchema, 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({ dish: dishName });
    setDishName("");
  };
  return (
     <div className={chatClasses.container}>
      {error && <div className={chatClasses.error}>{error.message}</div>}
      <form 
         onSubmit={handleSubmit}
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
