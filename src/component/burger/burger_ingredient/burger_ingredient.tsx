import PropTypes from "prop-types";
import "./burger_ingredient.css";
import {
  IBurgerIngredientType,
  BurgerIngredientTypeEnum,
} from "../../../types/burger_ingredient_types";

export const BurgerIngredient = ({
  types,
}: {
  types: IBurgerIngredientType;
}) => {
  let ingredient;
  switch (types) {
    case BurgerIngredientTypeEnum.BreadBottom:
      ingredient = <div className="BreadBottom"></div>;
      break;
    case BurgerIngredientTypeEnum.BreadTop:
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case BurgerIngredientTypeEnum.Meat:
      ingredient = <div className="Meat"></div>;
      break;
    case BurgerIngredientTypeEnum.Cheese:
      ingredient = <div className="Cheese"></div>;
      break;
    case BurgerIngredientTypeEnum.Salad:
      ingredient = <div className="Salad"></div>;
      break;
    case BurgerIngredientTypeEnum.Bacon:
      ingredient = <div className="Bacon"></div>;
      break;
    default:
      break;
  }
  return <>{ingredient}</>;
};

BurgerIngredient.propType = {
  types: PropTypes.oneOf([
    BurgerIngredientTypeEnum.Bacon |
      BurgerIngredientTypeEnum.BreadBottom |
      BurgerIngredientTypeEnum.BreadTop |
      BurgerIngredientTypeEnum.Cheese |
      BurgerIngredientTypeEnum.Meat |
      BurgerIngredientTypeEnum.Salad,
  ]),
};
