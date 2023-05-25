export interface IPaymentDetails {
  id: string | null;
  name: string;
  startDate: string;
  finishDate: string;
  cost: number;
}
export interface IPayment {
  fullName: string;
  creditCard: string;
  expires: string;
  cvc: number;
}
