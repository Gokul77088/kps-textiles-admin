import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { initialProducts } from "../services/dummyData"

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useLocalStorage("products", initialProducts)

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductContext)
}
