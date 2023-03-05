// types :
//  TODO : add types for models

// User :
export interface User {
  // from the db :
  id: string;
  cin: string;
  email: string;
  password: string;

  last_name: string;
  first_name: string;
  dob: Date;

  address: string;
  city: string;
  phone_number: string;
  blood_type: string;
}

// Hospital :
export interface Hospital {
  id: string;
  name: string;
  location: string;
  email: string;
  blood_requests: BloodRequest[];
  Donation: Donation[];
}

export interface Donation {
  id: string;
  user_id: string;
  hospital_id: string;
  bloodTypeId: string;
  created_at: Date;
  updated_at: Date;
  User: User;
  Hospital: Hospital;
  BloodType: BloodType;
}

export interface BloodRequest {
  id: string;
  hospital_id: string;
  blood_type: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  hospital: Hospital;
}

// BloodType :
export interface BloodType {
  id: string;
  type: string;
  canDonateTo: string;
  canReceiveFrom: string;
  created_at: Date;
  updated_at: Date;
  Donation: Donation[];
}
