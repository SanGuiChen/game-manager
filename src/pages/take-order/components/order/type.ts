export enum EOrderType {
  PUBLIC = 'PUBLIC',
  PARTNER_TRANING = 'PARTNER_TRANING',
}

export interface IOrderItem {
  type: EOrderType;
  title: string;
  gameText: string;
  gameOrigin: string;
  price: string;
  securityDeposit: string;
  timeLitmit: string;
  publisher: string;
}
