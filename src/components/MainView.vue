<template>
  <div class="main-page">
    <button class="btn" @click="addToCart()">
      Add To Cart
    </button>

    <button class="btn" @click="removeAllCartItems()">
      Clear Cart
    </button>
  </div>
  <CartDrawer />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartDrawer from './cart/CartDrawer'

import productList from '../data/products.json'

export default {
  name: 'ScoutSide',
  methods: {
    ...mapActions(['removeAllCartItems', 'addCartItem']),
    addToCart () {
      var item = productList[Math.floor(Math.random() * productList.length)]
      this.addCartItem(item)
    }
  },
  components: {
    CartDrawer
  }
}
</script>

<style lang="scss">
.main-page {
  width: 100%;
}

.btn + .btn {
  margin-left: 20px;
}
</style>
