import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types/idex"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient

}
export default function PatientsDetails({ patient }: PatientDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClic =()=>{
        deletePatient(patient.id)
        toast('Paciente eliminado',{type:'error'})
    }
    return (
        <div className="mx-5 my-10 px-5 gap-3 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label='ID' data={patient.id} />
            <PatientDetailItem label='Nombre' data={patient.name} />
            <PatientDetailItem label='Propietario' data={patient.caretaker} />
            <PatientDetailItem label='Email' data={patient.email} />
            <PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />
            <PatientDetailItem label='Sintomas' data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row justify-between mt-10">
                <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                 onClick={()=>getPatientById(patient.id)}>
                    editar
                </button>
                <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleClic}>
                    eliminar
                </button>
            </div>

        </div>
    )
}
