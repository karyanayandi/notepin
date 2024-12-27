const CART_FRAGMENT = `#graphql
fragment cartFragment on Cart {
  id
  totalQuantity
  checkoutUrl
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
  }
  lines(first: 100) {
    nodes {
      id
      quantity
      merchandise {
        ...on ProductVariant {
          id
          title
          image {
            url
            altText
            width
            height
          }
          product {
            handle
            title
          }
        }
      }
      cost {
        amountPerQuantity{
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
      }
    }
  }
}
`

const PRODUCT_FRAGMENT = `#graphql
fragment productFragment on Product {
  id
  title
  handle
  description
  images (first: 10) {
    nodes {
      url
      width
      height
      altText
    }
  }
  variants(first: 10) {
    nodes {
      id
      title
      availableForSale
      quantityAvailable
      price {
        amount
        currencyCode
      }
    }
  }
  featuredImage {
    url
    width
    height
    altText
  }
  }
`

export const ProductsQuery = `#graphql
query productDetails($language: LanguageCode = EN, $first: Int!) @inContext(language: $language) {
  products(first: $first) {
    edges {
      node {
        ...productFragment
      }
    }
  }
}
  ${PRODUCT_FRAGMENT}
`

export const ProductsByQueryQuery = `#graphql
query ($language: LanguageCode = EN, $first: Int!, $sortKey: ProductSortKeys = TITLE, $query: String!) @inContext(language: $language) {
  products(first: $first,  sortKey: $sortKey, query: $query) {
    edges {
      node {
        ...productFragment
      }
    }
  }
}
  ${PRODUCT_FRAGMENT}
`
export const ProductByHandleQuery = `#graphql
  query ($language: LanguageCode = EN, $handle: String!) @inContext(language: $language) {
    product(handle: $handle) {
      ...productFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const ProductRecommendationsQuery = `#graphql
  query ($language: LanguageCode = EN, $productId: ID!) @inContext(language: $language) {
    productRecommendations(productId: $productId) {
      ...productFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const GetCartQuery = `#graphql
  query ($id: ID!) {
    cart(id: $id) {
      ...cartFragment
    }
  }
  ${CART_FRAGMENT}
`

export const CreateCartMutation = `#graphql
  mutation ($id: ID!, $quantity: Int!) {
    cartCreate (input: { lines: [{ merchandiseId: $id, quantity: $quantity }] }) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
  ${CART_FRAGMENT}
`

export const AddCartLinesMutation = `#graphql
  mutation ($cartId: ID!, $merchandiseId: ID!, $quantity: Int) {
    cartLinesAdd (cartId: $cartId, lines: [{ merchandiseId: $merchandiseId, quantity: $quantity }]) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
  ${CART_FRAGMENT}
`

export const RemoveCartLinesMutation = `#graphql
  mutation ($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove (cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
  ${CART_FRAGMENT}
`

export const UpdateCartLinesMutation = `#graphql
  mutation ($cartId: ID!, $lines:[CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
  ${CART_FRAGMENT}
`

export const SearchProductsQuery = `#graphql
  query searchProducts($query: String!, $first: Int) {
    search(query: $query, first: $first, types: PRODUCT) {
      edges {
        node {
          ...productFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`