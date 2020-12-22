import { createContext } from 'react'

export const FooContext = createContext(null)

export const FooProvider = (props) => {
  return (
    <FooContext.Provider value={props.value}>
      {props.children}
    </FooContext.Provider>
  )
}
