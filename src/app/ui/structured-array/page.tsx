"use client"
import { useState } from "react"
import { experimental_useObject as useObject} from "@ai-sdk/react";
import { structuredArraySchema } from "./schema";

function StructuredArrayPage() {
    const [type, setType] = useState("");
  
     const { submit, object, isLoading, error, stop } = useObject({
      api: "/api/structured-array",
      schema: structuredArraySchema, 
    });
  return (
    <div>StructuredArrayPage</div>
  )
}

export default StructuredArrayPage