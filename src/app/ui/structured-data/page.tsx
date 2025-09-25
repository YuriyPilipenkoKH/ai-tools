"use client"
import { useState } from "react"


function StructuredDataPage() {
  const [dishName, setDishName] = useState("");

  return (
    <div>
      <form >
        <input 
        placeholder="Enter a dish name..."/>
        <button
         type="submit">
          Grnerate</button>
      </form>
    </div>
  )
}

export default StructuredDataPage
