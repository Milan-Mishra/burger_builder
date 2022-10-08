import { useState } from "react";
import { CheckoutSummary } from "../../component/order/checkout_summary/checkout_summary";
import { IBurgerOptionType } from "../../types/burger_option_types";

export const Checkout = () => {
  // set burger option state
  const [getCheese, setCheese] = useState<number>(1);
  const [getSalad, setSalad] = useState<number>(1);
  const [getMeat, setMeat] = useState<number>(1);
  const [getBacon, setBacon] = useState<number>(1);

  const burgerOption: IBurgerOptionType = {
    cheese: getCheese,
    bacon: getBacon,
    salad: getSalad,
    meat: getMeat,
  };
  return (
    <div>
      <CheckoutSummary burgerOption={burgerOption} />
      <CheckoutSummary burgerOption={burgerOption} />
      <CheckoutSummary burgerOption={burgerOption} />
    </div>
  );
};
