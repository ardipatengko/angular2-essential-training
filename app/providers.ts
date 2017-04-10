import { OpaqueToken } from '@angular/core';

export const sexListToken = new OpaqueToken('sexListToken');
export const expertiseListToken = new OpaqueToken('expertiseListToken');

export const sexList= {
  sex: ['Male', 'Female']
};

export const expertiseList= {
  expertise: ['Application Development', 'Data Analyst', 'Networking']
};