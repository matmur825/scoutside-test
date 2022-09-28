<template>
  <div
    class="mini-cart__overlay"
    :class="{ 'is-opened' : isOpen}"
    @click="closeCart()"
  >
  </div>

  <div
    class="mini-cart"
    :class="{ 'is-opened' : isOpen}"
  >

    <button class="mini-cart__close" @click="closeCart()">X</button>

    <div v-if="isEmptyCart">
      The basket is empty.
    </div>

    <div v-else class="mini-cart__content">
      <div class="mini-cart__lists">
        <div
          v-for="(cartItem, index) in cartItems"
          :key="index"
          class="mini-cart__item"
        >
          <div class="mini-cart__item-head">
            <h3 class="mini-cart__item-title">
              {{ cartItem.title }}
            </h3>

            <span class="mini-cart__item-quantity">x {{ cartItem.quantity }}</span>
          </div>

          <p class="mini-cart__item-price">${{ cartItem.price }}</p>
        </div>
      </div>

      <div class="mini-cart__footer">
        <div class="mini-cart__footer-total">
          <p><b>Total:</b></p>
          <p>${{ cartTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartList',
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartQuantity']),
    isEmptyCart () {
      return this.cartItems.length === 0
    }
  },
  watch: {
    cartItems () {
      this.isOpen = true
    }
  },
  methods: {
    closeCart () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss">
  .mini-cart {
    padding: 20px;
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    max-width: 600px;
    background: white;
  }

  .mini-cart__overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: grey;
    display: none;
    opacity: 0.3;
  }

  .mini-cart__overlay.is-opened {
    display: block;
  }

  .mini-cart.is-opened {
    right: 0;
  }

  .mini-cart__close {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 0;
  }

  .mini-cart__item {
    border-bottom: 1px solid grey;
    padding: 20px 0;

    &:last-child {
      border: none;
    }
  }

  .mini-cart__item-title {
    margin: 0;
  }

  .mini-cart__item-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .mini-cart__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .mini-cart__lists {
    flex-grow: 1;
    overflow-y: auto;
  }

  .mini-cart__footer {
    padding: 20px 0;
    border-top: 1px solid grey;
  }

  .mini-cart__footer-total {
    display: flex;
    justify-content: space-between;
  }
</style>
