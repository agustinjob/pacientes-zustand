import { usePatientStore } from "../store/store"
import PatientsDetails from "./PatientsDetails"

export default function PatientList() {

  const patients = usePatientStore(state => state.patients)
  //  const {patients} = usePatientStore() Es lo mismo que arriba

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-rxl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
          {patients.map(patient => (
            <PatientsDetails
              key={patient.id}
              patient={patient}
            />
          ))}

        </>
      ) :
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 fonst-bold">y aparecerán en este lugar</span>
          </p>
        </>}
    </div>
  )
}
