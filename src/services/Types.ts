export type  PatientData = {
    name : string,
    phoneNumber : string,
    bloodType : string,
    appointmentType : string,
    appointmentDate : string,
}

export type PatientStatus = PatientData &  {
    id : string,
    status : 'waiting' | 'comming' | 'current'; 
}

export interface RootState {
    patient: {
      items: PatientStatus[], 
    };
  }
  
  