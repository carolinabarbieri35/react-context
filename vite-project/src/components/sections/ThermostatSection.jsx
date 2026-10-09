
import { useTempContext } from "../../contexts/TempContext";


const minTemp = 16;
const maxTemp = 28;

export default function ThermostatSection() {
const {temp,handleDecreaseTemp, handleIncreaseTemp,handleResetTemp} = useTempContext();

 return (
  <section className="d-flex justify-content-center align-items-center flex-column gap-2">
<h2 className="text-white">Temperature: {temp}°C 
    {temp >= 16 && temp <=19 &&( 
    <span className = " text-white fs-6 ms-3">Freddo</span>  
  )}
   {temp >= 20 && temp <=24 && (
    <span className = "text-white fs-6 ms-3">Confort</span>
  )} 
   {temp >=25 && temp <=28 && (
    <span className = "text-white fs-6 ms-3">Caldo</span>
  )}
  </h2>



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