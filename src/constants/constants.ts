import { BurgerIngredientTypeEnum } from "../types/burger_ingredient_types";
import { IDialogBox } from "../types/dialog_box_types";

export const ingredientArray = [
  { Name: "Cheese", type: BurgerIngredientTypeEnum.Cheese },
  { Name: "Salad", type: BurgerIngredientTypeEnum.Salad },
  { Name: "Bacon", type: BurgerIngredientTypeEnum.Bacon },
  { Name: "Meat", type: BurgerIngredientTypeEnum.Meat },
];

export const defaultIngredientsPrice = {
  Cheese: 1,
  Salad: 0.5,
  Bacon: 0.75,
  Meat: 2,
};

export const defaultAlertText: string = "This is a success message";

export const defaultAlertTiming: number = 5000;

export const message: { [key: string]: string } = {
  burgerIngredientsResetMessage: "All burger ingredients has ben reset!",
  orderConfirm: "Congratulations! Your burger order has been placed!",
  fetchIngredientsError: "Can't fetch ingredients info",
};

export const dialogBox: IDialogBox = {
  clearAllButton: {
    title: "Are you sure you want to do this?",
    body: "After doing this all of your ingredients will be removed",
  },
  orderButton: {
    title: "Are you sure?",
    body: "Are you sure you want to order this burger? it will cost you about ",
  },
};
