import { useState } from "react"

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)

    if (storedValue !== null) {
      return JSON.parse(storedValue)
    }

    return initialValue
  })

  function updateValue(newValue) {
    setValue(newValue)

    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, updateValue]
}

export default useLocalStorage
