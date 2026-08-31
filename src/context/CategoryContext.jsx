import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const CategoryContext = createContext()

function CategoryProvider({ children }) {
  const [categories, setCategories] = useLocalStorage("categories", [
    "Silk Sarees",
    "Cotton Sarees",
    "Wedding Sarees",
  ])

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategories() {
  return useContext(CategoryContext)
}

export default CategoryProvider
