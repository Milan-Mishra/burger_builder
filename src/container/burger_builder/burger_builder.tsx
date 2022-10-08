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
  const [getCheese, setCheese] = useState<number>(0);
  const [getSalad, setSalad] = useState<number>(0);
  const [getMeat, setMeat] = useState<number>(0);
  const [getBacon, setBacon] = useState<number>(0);
  const [getPrice, setPrice] = useState<number>(0);
  const [getDisableIngredientTypes, setDisableIngredientTypes] = useState<
    IBurgerIngredientType[]
  >([]);
  const [isDisabledClearAllButton, setIsDisabledClearAllButton] =
    useState(true);

  const [displayLoading, setDisplayLoading] = useState(true);

  const [hasIngredientFetched, setHasIngredientFetched] = useState(false);

  const burgerOption: IBurgerOptionType = {
    cheese: getCheese,
    bacon: getBacon,
    salad: getSalad,
    meat: getMeat,
  };

  // update the ingredients
  const updateIngredients = (
    addOrRemoveType: IAddOrRemoveIngredientType,
    ingredientType: IBurgerIngredientType
  ) => {
    const value: -1 | 1 = addOrRemoveType ? 1 : -1;
    switch (ingredientType) {
      case BurgerIngredientTypeEnum.Bacon:
        getBacon > 0 || value !== -1 ? setBacon(getBacon + value) : null;
        break;
      case BurgerIngredientTypeEnum.Cheese:
        getCheese > 0 || value !== -1 ? setCheese(getCheese + value) : null;
        break;
      case BurgerIngredientTypeEnum.Meat:
        getMeat > 0 || value !== -1 ? setMeat(getMeat + value) : null;
        break;
      case BurgerIngredientTypeEnum.Salad:
        getSalad > 0 || value !== -1 ? setSalad(getSalad + value) : null;
        break;
      default:
        break;
    }
  };

  // update the total amount of burger
  const updateBurgerAmount = () => {
    const newPrice: number =
      getCheese * defaultIngredientsPrice.Cheese +
      getSalad * defaultIngredientsPrice.Salad +
      getBacon * defaultIngredientsPrice.Bacon +
      getMeat * defaultIngredientsPrice.Meat;
    setPrice(newPrice);
  };

  //handle disable button array
  const handleDisableButtonArray = () => {
    const tempArray: IBurgerIngredientType[] = [];
    !getCheese ? tempArray.push(BurgerIngredientTypeEnum.Cheese) : null;
    !getSalad ? tempArray.push(BurgerIngredientTypeEnum.Salad) : null;
    !getMeat ? tempArray.push(BurgerIngredientTypeEnum.Meat) : null;
    !getBacon ? tempArray.push(BurgerIngredientTypeEnum.Bacon) : null;
    getCheese || getSalad || getMeat || getBacon
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
    burgerOption.cheese = getCheese;
    burgerOption.bacon = getBacon;
    burgerOption.salad = getSalad;
    burgerOption.meat = getMeat;
    updateBurgerAmount();
    handleDisableButtonArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCheese, getSalad, getBacon, getMeat]);

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
      setDisplayLoading(false);
      setHasIngredientFetched(true);
      console.log(e);
    }
  };

  // fetch ingredients from the server side
  useEffect(() => {
    (async () => await fetchIngredientsFromTheServer())();
    setTimeout(() => setDisplayLoading(false), 1100);
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
      <LoadingComponent IsActive={displayLoading} />
      <div className="burger">
        <Burger burgerOption={burgerOption} />
        <BurgerControllers
          buttonClickEvent={updateIngredients}
          disabledButtonArrayList={getDisableIngredientTypes}
          price={getPrice}
          clearAll={clearAllEvent}
          isClearAllDisabled={isDisabledClearAllButton}
          burgerOption={burgerOption}
        />
      </div>
    </>
  );
};
