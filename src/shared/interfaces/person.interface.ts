import dayjs from 'dayjs';

export interface IPersonalData {
  firstName: string;
  lastName: string;
  dateOfBirth: dayjs.Dayjs;
  phoneNumber: number;
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
  voivodeship: string;
  country: string;
}
