export interface IPaymentDetails {
  id: string | null;
  name: string;
  startDate: string | null | undefined;
  finishDate: string | null | undefined;
  cost: number | string;
}
export interface IPayment {
  fullName: string;
  creditCard: string;
  expires: string;
  cvc: number | string;
}
