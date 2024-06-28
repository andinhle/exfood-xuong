import { ReactNode, createContext, useReducer } from "react"
import { IFood } from '../interfaces/IFood';
import foodReducer from "./foodReducer";


interface Props{
  children:ReactNode
}
export const FoodContext = createContext({} as {
  foods:IFood[],
  dispath:any
})

const FoodProvider = (props:Props) => {
  const [foods,dispath]=useReducer(foodReducer,[] as IFood[])
  return (
    <FoodContext.Provider value={{foods,dispath}}>
      {
        props.children
      }
    </FoodContext.Provider>
  )
}

export default FoodProvider