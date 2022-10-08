import { addOrRemoveIngredientTypeEnum } from "../../../types/add_or_remove_ingredient_type";
import { IBurgerIngredientType } from "../../../types/burger_ingredient_types";
import "./burger_controller.css";

export const BurgerController = ({
  name,
  buttonClickEvent,
  type,
  disabledButtonArrayList,
}: {
  name: string;
  buttonClickEvent: Function;
  type: IBurgerIngredientType;
  disabledButtonArrayList: IBurgerIngredientType[];
}) => {
  const isDisabled: boolean =
    disabledButtonArrayList.indexOf(type) > -1 ? true : false;
  return (
    <div className="BuildControl">
      <label className="Label" htmlFor="">
        {name}
      </label>
      <button
        disabled={isDisabled}
        className="Less"
        onClick={() =>
          buttonClickEvent(addOrRemoveIngredientTypeEnum.Less, type)
        }
      >
        Less
      </button>
      <button
        className="More"
        onClick={() =>
          buttonClickEvent(addOrRemoveIngredientTypeEnum.More, type)
        }
      >
        More
      </button>
    </div>
  );
};
