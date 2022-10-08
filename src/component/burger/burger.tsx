import { BurgerIngredient } from "./burger_ingredient/burger_ingredient";
import { BurgerIngredientTypeEnum } from "../../types/burger_ingredient_types";
import "./burger.css";

export const Burger = ({ burgerOption }: { burgerOption: any }) => {
  let burgerData: any = Object.keys(burgerOption).map((keyName: any) =>
    [...Array(burgerOption[keyName])].map((_, index) => {
      let burgerOptionData;
      switch (keyName) {
        case "salad":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Salad}
            />
          );
          break;
        case "bacon":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Bacon}
            />
          );
          break;
        case "cheese":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Cheese}
            />
          );
          break;
        case "meat":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Meat}
            />
          );
          break;
        default:
          break;
      }
      return burgerOptionData;
    })
  );
  /**
   * Convert a 2D JavaScript array to a 1D array
   * reference https://stackoverflow.com/a/39805778/15350391
   */
  const arr1d = [].concat(...burgerData);
  if (arr1d.length === 0) {
    burgerData = (
      <p className="noIngredients">Please start adding your ingredients!</p>
    );
  } else {
    console.log("array is empty");
  }
  return (
    <div className="Burger Burger_king">
      <BurgerIngredient types={BurgerIngredientTypeEnum.BreadTop} />
      {burgerData}
      <BurgerIngredient types={BurgerIngredientTypeEnum.BreadBottom} />
    </div>
  );
};
