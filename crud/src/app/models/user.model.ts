export interface User {
  id?: string;
  name: string;
  email: string;
  profession: string;
  documentNumber: string;
  birthDate: string; // 2024-04-24T19:25:45.000
  monthlyIncome: number;
  address: Address;
}

export interface Address {
  zipCode: string;
  street: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
  country: string;
}
