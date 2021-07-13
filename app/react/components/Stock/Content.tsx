import React, { useEffect } from 'react'
import GET_STOCK  from '../../graphql/query.getStock.graphql'
import { useLazyQuery } from 'react-apollo'
import { useProduct } from 'vtex.product-context'

interface PickupPoint {
  name: string
  WarehouseId: string
  address: string
  lat: number
  lng: number
  phone: string
  schedule: string
}

const StockContent = () => {

  const { selectedItem } = useProduct()

  const [ getStockAvailability, { data, loading, error } ] = useLazyQuery(GET_STOCK, {
    variables: {
      skuId: selectedItem.itemId
    }
  })
  console.log({ data, loading, error })

  useEffect(() => {
    getStockAvailability()     
  }, [selectedItem])

  if( loading ) {
    return <p>Cargando...</p>
  }
  if( error || !data?.stock?.length ) {
    return <p>Este producto no tiene disponibilidad en tiendas</p>
  }

  const renderedPickupPoints = data.stock.map(({ name, address, WarehouseId }: PickupPoint) => (
    <div>
      <p>{name}</p>
      <p>{WarehouseId}</p>
      <p>{address}</p>
    </div>
  ))

  return (
    <div>
      <h4>Tiendas disponibles:</h4>
      <div>
        { renderedPickupPoints }
      </div>
    </div>
  )
}

export default StockContent
