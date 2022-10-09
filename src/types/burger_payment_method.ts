export enum IPaymentMethodTypeEnum {
  CARD = 1,
  UPI = 2,
  NETBANKING = 3,
  COD = 4,
  EMI = 5,
  NOCOSTEMI = 6,
}

export type IPaymentMethodType =
  | IPaymentMethodTypeEnum.NOCOSTEMI
  | IPaymentMethodTypeEnum.NETBANKING
  | IPaymentMethodTypeEnum.COD
  | IPaymentMethodTypeEnum.EMI
  | IPaymentMethodTypeEnum.UPI
  | IPaymentMethodTypeEnum.CARD;
