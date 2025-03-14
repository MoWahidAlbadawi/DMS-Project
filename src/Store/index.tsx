//type Items
import { PatientStatus } from '@/services/Types';
import { createSlice, configureStore } from '@reduxjs/toolkit'
//get data from local storage
const patientsFromLS = window.localStorage.getItem('patients');
const initialPatients = patientsFromLS ? JSON.parse(patientsFromLS) : [];
const initialState : {items : PatientStatus[]} = {items : initialPatients };


const patientSlice = createSlice({
    name : 'patient',
    initialState,
    reducers : {
        addItem (state , action) {
            state.items = state.items.concat(action.payload);
        },
        deleteItem (state,action) {
            state.items = state.items.filter((patient : PatientStatus) => patient.id !== action.payload.id);
        },
        moveToProcess (state,action) {
            //get index element then get element
            const indexOldPatient = state.items.findIndex((patient : PatientStatus) => patient.id == action.payload.id);
            const oldPatient = state.items[indexOldPatient];
            //get current patients
            const currentPatients = state.items.filter((patient : PatientStatus) => patient.status == 'current');
            //check if we don't have any patient proccessing now
            if(currentPatients.length == 0) {
                //change patient status then changed it in main our array 
                let updatedPatient : PatientStatus = {...oldPatient , status : 'current'};
                state.items[indexOldPatient] = updatedPatient;
            }
        }
    },
});

export const patientActions = patientSlice.actions;
export const store = configureStore({
    reducer : {patient : patientSlice.reducer},
});