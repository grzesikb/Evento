export interface IOrder {
  name: string;
  startDate: string | null | undefined;
  finishDate: string | null | undefined;
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

export interface IOrderEvent {
  name: string;
  startDate: string | null | undefined;
  finishDate: string | null | undefined;
  type: string;
  status: string;
  additionalInfo?: string;
  securityOption?: boolean;
  barOption?: boolean;
}

export interface IOrderPublicEvent {
  artist: string;
  maxPeople: number;
  minAge: number;
}

export interface IOrderPrivateEvent {
  numberOfSeats: number;
  companyName: string;
  cateringOption?: boolean;
}

export interface IOrderCelebrationEvent {
  numberOfSeatsC: number;
  cateringName: string;
  types: 'Birthdays' | 'Name days' | 'Bachelorette parties';
}

export interface IOrderEventsDataGrid {
  lp: number;
  id: string;
  name: string;
  startDate: string;
  finishDate: string;
  status: string;
}
