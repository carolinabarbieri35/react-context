import {useContext} from "react";
import TempContext from "../../contexts/TempContext";


const minTemp = 16;
const maxTemp = 28;

export default function ThermostatSection() {
const {temp,handleDecreaseTemp, handleIncreaseTemp,handleResetTemp} = useContext (TempContext)

 return (
  <section className="d-flex justify-content-center align-items-center flex-column gap-2">
<h2 className="text-white">Temperature: {temp}°C</h2>

<div className="btn-group btn-secondary gap-2">
<button onClick={handleIncreaseTemp} disabled= {temp >=maxTemp}>+</button>
<button onClick={handleDecreaseTemp} disabled = {temp <= minTemp}>-</button>
<button onClick={handleResetTemp}>Reset</button>
</div>

{temp === minTemp && (
 <p className="bg-white h-5">Min temp reached 16°</p>
)
}

{
 temp === maxTemp && (
  <p className="bg-white h-5">Max temp reached 28°</p>
 )
}

  </section>




  )
}