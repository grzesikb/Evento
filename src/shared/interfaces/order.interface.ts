export interface IOrder {
  name: string;
  startDate: string | null | undefined;
  type: string;
  status: string;
  additionalInfo?: string;
  securityOption?: boolean | undefined;
  barOption?: boolean | undefined;
  artist?: string;
  maxPeople?: number | string;
  minAge?: number | string;
  numberOfSeats?: number | string;
  companyName?: string;
  cateringOption?: boolean | undefined;
  cateringName?: string;
  types?: 'Birthdays' | 'Name days' | 'Bachelorette parties' | '';
}

export interface IOrderDatesProps {
  startDate?: string | null | undefined;
}

export interface IOrderEventsDataGrid {
  lp: number;
  id: string;
  name: string;
  startDate: string;
  status: string;
}
