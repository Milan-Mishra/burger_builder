export enum BurgerIngredientTypeEnum {
  BreadBottom = 1,
  BreadTop = 2,
  Meat = 3,
  Cheese = 4,
  Salad = 5,
  Bacon = 6,
}

export type IBurgerIngredientType =
  | BurgerIngredientTypeEnum.Bacon
  | BurgerIngredientTypeEnum.BreadBottom
  | BurgerIngredientTypeEnum.BreadTop
  | BurgerIngredientTypeEnum.Cheese
  | BurgerIngredientTypeEnum.Meat
  | BurgerIngredientTypeEnum.Salad;
