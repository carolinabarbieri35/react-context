import {useContext} from "react"
import TempContext from "../contexts/TempContext"


export default function Footer() {
  const {temp} = useContext (TempContext)
  return (
    <section className="bg-dark mt-2 ">
     <p className="text-white text-center py-2 fw-bold">La temperatura nella stanza è di {temp}°C</p>
    </section>
  )
}