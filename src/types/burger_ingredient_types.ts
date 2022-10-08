export enum BurgerIngredientTypeEnum {
  BreadBottomFoodName = 1,
  BreadTopFoodName = 2,
  MeatFoodName = 3,
  CheeseFoodName = 4,
  SaladFoodName = 5,
  BaconFoodName = 6,
}

export type IBurgerIngredientType =
  | BurgerIngredientTypeEnum.BaconFoodName
  | BurgerIngredientTypeEnum.BreadBottomFoodName
  | BurgerIngredientTypeEnum.BreadTopFoodName
  | BurgerIngredientTypeEnum.CheeseFoodName
  | BurgerIngredientTypeEnum.MeatFoodName
  | BurgerIngredientTypeEnum.SaladFoodName;
