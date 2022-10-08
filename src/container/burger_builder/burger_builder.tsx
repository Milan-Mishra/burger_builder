/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import { Burger } from "../../component/burger/burger";
import { BurgerControllers } from "../../component/burger_controllers/burger_controllers";
import { IAddOrRemoveIngredientType } from "../../types/add_or_remove_ingredient_type";
import { IBurgerOptionType } from "../../types/burger_option_types";
import { LoadingComponent } from "../../component/loading/loading";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { orderAxios } from "../../axios-instants";
import { AlertComponent } from "../../component/alert/alert";
import {
  BurgerIngredientTypeEnum,
  IBurgerIngredientType,
} from "../../types/burger_ingredient_types";
import {
  defaultAlertTiming,
  defaultIngredientsPrice,
  message,
} from "../../constants/constants";
import "./burger_builder.css";

export const BurgerBuilder = () => {
  // set burger option state
  const [getCheeseValue, setCheese] = useState<number>(0);
  const [getSaladValue, setSalad] = useState<number>(0);
  const [getMeatValue, setMeat] = useState<number>(0);
  const [getBaconValue, setBacon] = useState<number>(0);
  const [getPrice, setPrice] = useState<number>(0);
  const [getDisableIngredientTypes, setDisableIngredientTypes] = useState<
    IBurgerIngredientType[]
  >([]);
  const [isDisabledClearAllButton, setIsDisabledClearAllButton] =
    useState(true);

  const [displayLoadingStateValue, setDisplayLoadingValue] = useState(true);

  const [hasIngredientFetched, setHasIngredientFetched] = useState(false);

  const burgerOption: IBurgerOptionType = {
    cheese: getCheeseValue,
    bacon: getBaconValue,
    salad: getSaladValue,
    meat: getMeatValue,
  };

  // update the ingredients
  const updateIngredients = (
    addOrRemoveType: IAddOrRemoveIngredientType,
    ingredientType: IBurgerIngredientType
  ) => {
    const value: -1 | 1 = addOrRemoveType ? 1 : -1;
    switch (ingredientType) {
      case BurgerIngredientTypeEnum.Bacon:
        getBaconValue > 1 || value === 0
          ? setBacon(getBaconValue + value)
          : null;
        break;
      case BurgerIngredientTypeEnum.Cheese:
        getCheeseValue > 1 || value === 0
          ? setCheese(getCheeseValue + value)
          : null;
        break;
      case BurgerIngredientTypeEnum.Meat:
        getMeatValue > 1 || value === 0 ? setMeat(getMeatValue + value) : null;
        break;
      case BurgerIngredientTypeEnum.Salad:
        getSaladValue > 1 || value === 0
          ? setSalad(getSaladValue + value)
          : null;
        break;
      default:
        break;
    }
  };

  // update the total amount of burger
  const updateBurgerAmount = () => {
    const newPrice: number =
      getCheeseValue * defaultIngredientsPrice.Cheese +
      getSaladValue * defaultIngredientsPrice.Salad +
      getBaconValue * defaultIngredientsPrice.Bacon +
      getMeatValue * defaultIngredientsPrice.Meat;
    setPrice(newPrice);
  };

  //handle disable button array
  const handleDisableButtonArray = () => {
    const tempArray: IBurgerIngredientType[] = [];
    !getCheeseValue ? tempArray.push(BurgerIngredientTypeEnum.Cheese) : null;
    !getSaladValue ? tempArray.push(BurgerIngredientTypeEnum.Salad) : null;
    !getMeatValue ? tempArray.push(BurgerIngredientTypeEnum.Meat) : null;
    !getBaconValue ? tempArray.push(BurgerIngredientTypeEnum.Bacon) : null;
    getCheeseValue || getSaladValue || getMeatValue || getBaconValue
      ? setIsDisabledClearAllButton(false)
      : setIsDisabledClearAllButton(true);
    setDisableIngredientTypes(tempArray);
  };

  // clear all button
  const clearAllEvent = () => {
    setCheese(0);
    setSalad(0);
    setMeat(0);
    setBacon(0);
  };

  useEffect(() => {
    burgerOption.cheese = getCheeseValue;
    burgerOption.bacon = getBaconValue;
    burgerOption.salad = getSaladValue;
    burgerOption.meat = getMeatValue;
    updateBurgerAmount();
    handleDisableButtonArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCheeseValue, getSaladValue, getBaconValue, getMeatValue]);

  const fetchIngredientsFromTheServer = async () => {
    try {
      const config: AxiosRequestConfig = {
        method: "GET",
        url: "/ingredients.json",
      };
      const response: AxiosResponse = await orderAxios(config);
      const { data } = response;
      Object.keys(data).map((ingredientName: any) => {
        switch (ingredientName) {
          case "salad":
            setSalad(data[ingredientName]);
            break;
          case "meat":
            setMeat(data[ingredientName]);
            break;
          case "bacon":
            setBacon(data[ingredientName]);
            break;
          case "cheese":
            setCheese(data[ingredientName]);
            break;
        }
        return true;
      });
      setHasIngredientFetched(false);
      return response;
    } catch (e) {
      setDisplayLoadingValue(false);
      setHasIngredientFetched(true);
      console.log(e);
    }
  };

  // fetch ingredients from the server side
  useEffect(() => {
    (async () => await fetchIngredientsFromTheServer())();
    setTimeout(() => setDisplayLoadingValue(false), 1100);
  }, []);

  return (
    <>
      <AlertComponent
        isOpen={hasIngredientFetched}
        alertText={message.fetchIngredientsError}
        timing={defaultAlertTiming}
        isSuccess={false}
        setAlert={setHasIngredientFetched}
      />
      <LoadingComponent IsActive={displayLoadingStateValue} />
      <div className="burger">
        <Burger burgerOption={burgerOption} />
        <BurgerControllers
          buttonClickEvent={updateIngredients}
          disabledButtonArrayListName={getDisableIngredientTypes}
          price={getPrice}
          clearAllFunction={clearAllEvent}
          isClearAllDisabled={isDisabledClearAllButton}
          burgerOptionTypes={burgerOption}
        />
      </div>
    </>
  );
};
