import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      imgURL: "https://img9.hkrtcdn.com/21405/prd_2140498-Noise-ColorFit-Grande-Smartwatch-Jet-Black-Free-Size_o.jpg",
      name: "Noise ColorFit Grande Smartwatch, Free Size, Jet Black",
      price: "2099",
    },
    {
      id: 2,
      imgURL: "https://img5.hkrtcdn.com/18315/prd_1831424-MuscleBlaze-18g-Protein-Shake-No-Added-Sugar-6-PiecesPack-Strawberry-Cream_o.jpg",
       name: "MuscleBlaze 18g Protein Shake (No Added Sugar), 6 Piece(s)/Pack, Strawberry Cream",
       price: " 1569",
    },
    {
      id: 3,
      imgURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgoVGVp5aHPTYN_ZDyT3sTiY0j2Ky7lV4pd_UO3aVOCAZmp732LXvAL3_RGq36RcxRiccmnDYtzvgJSwMB3aCOUwp-Lg1qjxGGiLDYhghwIfUWymsYcgr8uA&usqp=CAE",
    name: "MuscleBlaze High Protein Muesli, 0.4 kg Dark Chocolate & Cranberry",
    price: "599",
    },

    {
      id: 4,
      imgURL: "https://cdn.shopify.com/s/files/1/0538/2137/4655/products/crunchy1kg_83942ee4-5b20-45e0-bbc2-e4eee9ae85ec_800x.webp?v=1662724121",
    name: "High Protein Dark Chocolate Peanut Butter",
    price: "749",
    },
  ],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};

export default shopReducer;
