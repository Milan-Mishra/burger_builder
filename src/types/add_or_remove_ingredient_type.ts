export enum addOrRemoveIngredientTypeEnum {
  Less,
  More,
}
export type IAddOrRemoveIngredientType =
  | addOrRemoveIngredientTypeEnum.Less
  | addOrRemoveIngredientTypeEnum.More;
