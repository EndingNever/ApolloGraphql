import { gql } from '@apollo/client'

export const LOAD_PRODUCTS = gql`

query{
  products{
    id
    description
    reviews {
      comment
    }
    price
  }
}

`