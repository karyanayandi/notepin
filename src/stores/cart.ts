import { persistentAtom } from "@nanostores/persistent"
import { atom } from "nanostores"
import type { z } from "zod"

import {
  addCartLines,
  createCart,
  getCart,
  removeCartLines,
} from "@/lib/shopify/query"
import type { CartResult } from "@/lib/shopify/schemas"

export const isCartDrawerOpen = atom(false)

export const isCartUpdating = atom(false)

const emptyCart = {
  id: "",
  checkoutUrl: "",
  totalQuantity: 0,
  lines: { nodes: [] },
  cost: { subtotalAmount: { amount: "", currencyCode: "" } },
}

// Cart store with persistent state (local storage) and initial value
export const cart = persistentAtom<z.infer<typeof CartResult>>(
  "cart",
  emptyCart,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
)

export async function initCart() {
  const sessionStarted = sessionStorage.getItem("sessionStarted")
  if (!sessionStarted) {
    sessionStorage.setItem("sessionStarted", "true")
    const localCart = cart.get()
    const cartId = localCart?.id
    if (cartId) {
      const data = await getCart(cartId)

      if (data) {
        cart.set({
          id: data.id,
          cost: data.cost,
          checkoutUrl: data.checkoutUrl,
          totalQuantity: data.totalQuantity,
          lines: data.lines,
        })
      } else {
        cart.set(emptyCart)
      }
    }
  }
}

export async function addCartItem(item: { id: string; quantity: number }) {
  const localCart = cart.get()
  const cartId = localCart?.id

  isCartUpdating.set(true)

  if (!cartId) {
    const cartData = await createCart(item.id, item.quantity)

    if (cartData) {
      cart.set({
        ...cart.get(),
        id: cartData.id,
        cost: cartData.cost,
        checkoutUrl: cartData.checkoutUrl,
        totalQuantity: cartData.totalQuantity,
        lines: cartData.lines,
      })
      isCartUpdating.set(false)
      isCartDrawerOpen.set(true)
    }
  } else {
    const cartData = await addCartLines(cartId, item.id, item.quantity)

    if (cartData) {
      cart.set({
        ...cart.get(),
        id: cartData.id,
        cost: cartData.cost,
        checkoutUrl: cartData.checkoutUrl,
        totalQuantity: cartData.totalQuantity,
        lines: cartData.lines,
      })
      isCartUpdating.set(false)
      isCartDrawerOpen.set(true)
    }
  }
}

export async function removeCartItems(lineIds: string[]) {
  const localCart = cart.get()
  const cartId = localCart?.id

  isCartUpdating.set(true)

  if (cartId) {
    const cartData = await removeCartLines(cartId, lineIds)

    if (cartData) {
      cart.set({
        ...cart.get(),
        id: cartData.id,
        cost: cartData.cost,
        checkoutUrl: cartData.checkoutUrl,
        totalQuantity: cartData.totalQuantity,
        lines: cartData.lines,
      })
      isCartUpdating.set(false)
    }
  }
}
