"use client"
import { useState } from "react"
import { experimental_useObject as useObject} from "@ai-sdk/react";
import { pokemonUISchema} from "./schema";
import { chatClasses } from "@/models/chatClasses";

function StructuredArrayPage() {
  const [type, setType] = useState("");
  
  const { submit, object, isLoading, error, stop } = useObject({
      api: "/api/structured-array",
      schema: pokemonUISchema, 
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
        {object?.map((pokemon) => (
          <div
            key={pokemon?.name}
            className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4">{pokemon?.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              {pokemon?.abilities?.map((ability) => (
                <div
                  key={ability}
                  className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-md"
                >
                  {ability}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
       className={chatClasses.form}>
        <div className={chatClasses.inputContainer}>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter a type..."
            className={chatClasses.input}
          />
          {isLoading ? (
            <button
              type="button"
              onClick={stop}
              className={chatClasses.stopButton}
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading || !type.trim()}
              className={chatClasses.button}
            >
              Generate
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default StructuredArrayPage