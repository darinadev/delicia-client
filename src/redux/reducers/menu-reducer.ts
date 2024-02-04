import { MenuType } from "../../types/types";
import { MenuActionTypes } from "../action-types";
import { SET_CURRENT_CATEGORY } from "../constants";

export type InitialStateType = {
  menu: Array<MenuType>;
  currentCategory: string;
};

let initialState: InitialStateType = {
  menu: [
    {
      id: 0,
      category: "breakfast",
      items: [
        {
          id: 1,
          title: "Greek salad",
          price: 15,
          description:
            "feta / olives / onion / tomato / cheese / cucumber / oregano vinaigrette",
        },
        {
          id: 2,
          title: "Vegetarian pizza",
          price: 12,
          description:
            "tomato / mozzarella / zucchini / eggplant / mushrooms / artichoke",
        },
        {
          id: 3,
          title: "Mushroom soup",
          price: 16,
          description:
            "butter / onions / garlic / mushrooms / flour / parsley / mixed greens",
        },
        {
          id: 4,
          title: "Caesar salad",
          price: 21,
          description:
            "anchovy fillets packed in oil / garlic / eggs / lemon / parmesan / pepper",
        },
        {
          id: 5,
          title: "Farm egg omelette",
          price: 17,
          description: "feta / eggs / spinach / mixed greens",
        },
        {
          id: 6,
          title: "Kale salad",
          price: 15,
          description: "kale / parmesan / nuts / onion / lemon",
        },
        {
          id: 7,
          title: "Margherita pizza",
          price: 16,
          description:
            "pizza dough / tomato sauce / olive oil / mozzarella / basil leaves",
        },
        {
          id: 8,
          title: "King salmon",
          price: 27,
          description:
            "poached egg / green rice / peas / walnuts / sesame / trout roe",
        },
      ],
    },
    {
      id: 1,
      category: "lunch",
      items: [
        {
          id: 9,
          title: "Seafood salad",
          price: 18,
          description: "lobster / shrimps / yellow pepper / olive oil",
        },
        {
          id: 10,
          title: "Salmon burger",
          price: 21,
          description: "feta / red onion / pepper / mized greens / lemon",
        },
        {
          id: 11,
          title: "Roasted tomato stew",
          price: 17,
          description: "house ciabatta croutons / smoked cheese / parmesan",
        },
        {
          id: 12,
          title: "Red grape salad",
          price: 34,
          description:
            "mixed greens / cheese / red onion / spice / grape / olive oil / avocado",
        },
        {
          id: 13,
          title: "Crispy chicken sandwich",
          price: 14,
          description:
            "mozzarella / peppers / chicken / lettuce / tomato / potato fries",
        },
        {
          id: 14,
          title: "Cauliflower bowl",
          price: 12,
          description:
            "red cabbage / wild rice / shrimps / cauliflower / onion / carrot / lettuce",
        },
        {
          id: 15,
          title: "Fried chicken",
          price: 19,
          description: "chicken / lettuce / onion / bbq sauce",
        },
      ],
    },
    {
      id: 2,
      category: "dinner",
      items: [
        {
          id: 16,
          title: "Spaghetti",
          price: 23,
          description: "fried eggs / shrimp / tomato / parmesan",
        },
        {
          id: 17,
          title: "Caesar wrap",
          price: 19,
          description: "grilled or fried chicken / skirt steak / shrimp",
        },
        {
          id: 18,
          title: "Beef tartare",
          price: 21,
          description:
            "mushrooms / cheese / beef / celery / cabbage / olive oil",
        },
        {
          id: 19,
          title: "Salmon pizza",
          price: 17,
          description:
            "salmon / sunflower sprouts / berries / onion / garlic / tomato",
        },
        {
          id: 20,
          title: "Greek salad wrap",
          price: 15,
          description:
            "feta / tomato / red onion / cucumber / pepper / oregano vinaigrette",
        },
        {
          id: 21,
          title: "Potato dumplings",
          price: 16,
          description:
            "homemade potato dumplings with tomato sauce / sweet peas / mozzarella cheese",
        },
        {
          id: 22,
          title: "Grilled vegetables",
          price: 23,
          description:
            "potato / tomato / cucumber / eggplant / cabbage / onion / mixed greens",
        },
        {
          id: 23,
          title: "Homemade pasta",
          price: 27,
          description:
            "homemade flat pasta / fresh clams / black olives / white wine / tomato garlic sauce",
        },
      ],
    },
    {
      id: 3,
      category: "dessert",
      items: [
        {
          id: 24,
          title: "Tiramisu",
          price: 12,
          description: "vanilla extract / coffee bean / cookies / milk",
        },
        {
          id: 25,
          title: "Chocolate cake",
          price: 21,
          description: "chocolate / fresh berries / strawberry",
        },
        {
          id: 26,
          title: "Cookie basket",
          price: 17,
          description: "chocolate brownie / cookie / biscuit",
        },
        {
          id: 27,
          title: "Caramel apple cake",
          price: 34,
          description: "pomegranate jam / toppings coconut / apple",
        },
        {
          id: 28,
          title: "Raspberry panna cotta",
          price: 14,
          description: "raspberries / cream / milk",
        },
        {
          id: 29,
          title: "Cheesecake",
          price: 12,
          description: "philadelphia cheese / vanilla extract / lemon",
        },
        {
          id: 30,
          title: "Apple pie",
          price: 12,
          description: "vanilla ice cream / citrus / caramel",
        },
      ],
    },
    {
      id: 4,
      category: "drinks",
      items: [
        {
          id: 31,
          title: "Juice",
          price: 8,
          description:
            "orange / grapefruit / cranberry / apple / cherry / pineapple / grapes / apricot",
        },
        {
          id: 32,
          title: "Fresh",
          price: 10,
          description:
            "cherries / raspberries / blueberries / strawberries / apricot / passion fruit",
        },
        {
          id: 33,
          title: "Tea",
          price: 7,
          description:
            "jasmine pearls / assam / earl grey / egyptian chamomile",
        },
        {
          id: 34,
          title: "Coffee",
          price: 14,
          description:
            "espresso / americano / cold brew coffee / latte / cappuccino / mocha",
        },
        {
          id: 35,
          title: "Derby daiquiri",
          price: 17,
          description:
            "bacardi carta blanka light rum / orange juice / lime juice / sugar syrup",
        },
        {
          id: 36,
          title: "Isabella",
          price: 19,
          description: "vermouth / grenadine / orange juice / ice cubes / gin",
        },
        {
          id: 37,
          title: "Strawberry lemonade",
          price: 15,
          description: "fresh strawberries / lemon",
        },
        {
          id: 38,
          title: "Wine",
          price: 19,
          description: "white / rose / orange / red",
        },
      ],
    },
  ],
  currentCategory: "breakfast",
};

const menuReducer = (
  state = initialState,
  action: MenuActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    default:
      return state;
  }
};

export default menuReducer;
