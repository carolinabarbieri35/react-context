import ThermostatSection from "./sections/ThermostatSection";

export default function MainContent() {
  return (
    <main className="flex-grow-1 p-3 bg-dark">
     <h2 className="text-center mb-4 fw-bold text-white">Controls</h2>
     <ThermostatSection/>

    </main>
  )
}