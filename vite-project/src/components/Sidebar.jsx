
import { useTempContext } from "../contexts/TempContext"

export default function Sidebar () {
 const {handleResetTemp} = useTempContext

  return (
   <aside className="w-25 px-4 border-end">
    <h3 className="h5">Thermostat Reset</h3>
    <button onClick={handleResetTemp} className="btn btn-dark">Reset</button>

   </aside>
  )
}