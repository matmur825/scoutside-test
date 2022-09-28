const state = {
  cartItems: []
}

const mutations = {
  ADD_CART_ITEM (state, payload) {
    state.cartItems = [payload, ...state.cartItems]
  },
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload
  }
}

const actions = {
  addCartItem ({ commit }, cartItem) {
    commit('ADD_CART_ITEM', cartItem)
  },
  removeAllCartItems ({ commit }) {
    commit('UPDATE_CART_ITEMS', [])
  }
}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.price) + acc
    }, 0).toFixed(2)
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule
