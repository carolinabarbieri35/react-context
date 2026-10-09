import { createContext } from "react";
import {useState} from "react"
import {useContext} from "react"

// definire context
const TempContext = createContext ();


const minTemp = 16;
const maxTemp = 28;


// definire provider
export  function TempContextProvider({children}) {

 const [temp, setTemp] = useState (20);
    
    function handleIncreaseTemp() {
     setTemp(actual =>(actual < maxTemp ? actual +1 : actual));
    }
   
     function handleDecreaseTemp() {
      setTemp(actual =>(actual > minTemp ? actual-1 : actual))
     }
   
     function handleResetTemp () {
      setTemp (20);
     }

  return (
    
      <TempContext.Provider value = {{
        temp,
        handleIncreaseTemp,
        handleDecreaseTemp,
        handleResetTemp,
      }}
      >
      {children}
      </TempContext.Provider>
  )
}
// creazione hook personalizzato per non dover importare usecontext in ogni componente e per controllare che ci sia il provider
// eslint-disable-next-line
export function useTempContext() {
 const context = useContext (TempContext);
 if (!context){
  throw new Error("This component must be a child of the countContextProvider component to acess the content value with usecontext") 
 }
  return context;
 
}

export default TempContext;