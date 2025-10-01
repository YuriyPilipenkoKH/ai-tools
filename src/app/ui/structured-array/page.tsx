"use client"
import { useState } from "react"
import { experimental_useObject as useObject} from "@ai-sdk/react";
import { structuredArraySchema } from "./schema";
import { chatClasses } from "@/models/chatClasses";

function StructuredArrayPage() {
  const [type, setType] = useState("");
  
  const { submit, object, isLoading, error, stop } = useObject({
      api: "/api/structured-array",
      schema: structuredArraySchema, 
    });

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      submit({ type });
      setType("");
  };
  return (
    <div className={chatClasses.container}>
        {error && <div className={chatClasses.error}>{error.message}</div>}

      <div className="space-y-8">
        <form
          onSubmit={handleSubmit}
          className={chatClasses.form}
        >
          <div className={chatClasses.inputContainer}>
            <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter a type..."
            className={chatClasses.input}
          />
             </div>
        </form>
      </div>

    </div>
  )
}

export default StructuredArrayPage