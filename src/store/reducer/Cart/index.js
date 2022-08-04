import {
  ADD_CART,
  GET_CART
} from '../../action/cart'

const inisialState = {
    cartResult: false,
    getCartResult: false,
}

const CartReducer = (state = inisialState, action) => {
    switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartResult: action.data
      }
    case GET_CART :
      return {
        ...state,
        getCartResult: action.data
      }
    default:
      return state
    }
}

export default CartReducer