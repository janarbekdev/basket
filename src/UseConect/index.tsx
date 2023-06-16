import {createContext,useContext} from "react";
 export interface GlobalContent {
     copy:boolean
       setCopy:(s:string) => void
}
export const  MyGlobalContext =createContext<GlobalContent>({
  copy:true,
      setCopy :() => {}
})

export const useGlobalContext = () =>  useContext(MyGlobalContext)