import { IFood } from "../interfaces/IFood";

const foodReducer = (state:any,action:any) => {
  switch (action.type) {
    case "LIST":
        return action.payload
    case "ADD":
        return [...state,action.payload]
    case "UPDATE":
        return state.map((item:IFood)=>{
            if (item.id !== action.payload.id) {
                return item
            }
            return action.payload
        })
    case "REMOVE":
        return state.filter((item:IFood)=>{
            return item.id !== action.payload
        })
  
    default:
        return state
  }
}

export default foodReducer