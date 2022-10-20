import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_PRODUCTS } from './GraphQL/Queries'


export default function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS)

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div>

    </div>
  )
}
