import { useState } from "react";
import { CheckoutSummary } from "../../component/order/checkout_summary/checkout_summary";
import { IBurgerOptionType } from "../../types/burger_option_types";

export const Checkout = () => {
  // set burger option state
  const [getCheese] = useState<number>(1);
  const [getSalad] = useState<number>(1);
  const [getMeat] = useState<number>(1);
  const [getBacon] = useState<number>(1);

  const burgerOption: IBurgerOptionType = {
    cheese: getCheese,
    bacon: getBacon,
    salad: getSalad,
    meat: getMeat,
  };
  return (
    <div>
      <CheckoutBurgerIngredient
        CheckoutBurgerIngredient={CheckoutBurgerIngredient}
      />
      <CheckoutBurgerIngredient
        CheckoutBurgerIngredient={CheckoutBurgerIngredient}
      />
      <CheckoutBurgerIngredient
        CheckoutBurgerIngredient={CheckoutBurgerIngredient}
      />
    </div>
  );
};
