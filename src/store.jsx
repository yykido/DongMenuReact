// store.js
import { createStore, combineReducers } from 'redux';

const initialAuthState = {
  isAuthenticated: false,
  user: null
};

const initialCartState = {
  carts: []
};

const initialProductState = {
    products: []
  };


function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.user };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}

function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, carts: [...state.carts, action.product] };
    case 'REMOVE_FROM_CART':
      return { ...state, carts: state.carts.filter(product => product.id !== action.id) };
    default:
      return state;
  }
}

function productReducer(state = initialProductState, action) {
    switch (action.type) {
      case 'RENDER_ALL_PRODUCTS':
        return { ...state, products: action.products };
      case 'REMOVE_ALL_PRODUCTS':
        return { ...state, products: [] };
      default:
        return state;
    }
}

const rootReducer = combineReducers({
  auth: authReducer,
  carts: cartReducer,
  products: productReducer
});

const store = createStore(rootReducer);

export default store;
