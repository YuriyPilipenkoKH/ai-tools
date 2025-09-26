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

        {object?.recipe && (
        <div className="space-y-6 px-4">
          <h2 className="text-2xl font-bold">{object.recipe.name}</h2>

          {object?.recipe?.ingredients && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <div className="grid grid-cols-2 gap-4">
                {object.recipe.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg"
                  >
                    <p className="font-medium">{ingredient?.name}</p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {ingredient?.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {object?.recipe?.steps && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Steps</h3>
              <ol className="space-y-4">
                {object.recipe.steps.map((step, index) => (
                  <li
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg"
                  >
                    <span className="font-medium mr-2">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

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
