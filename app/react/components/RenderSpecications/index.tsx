import React from 'react'
import { useProduct } from 'vtex.product-context'

const RenderSpecifications = () => {

  const { product, selectedItem } = useProduct()

  console.log('selectedItem', selectedItem)

  const rendered = () => {
    const { skuSpecifications } = product
    if( !skuSpecifications || !skuSpecifications.length ) return <p>Este producto no tiene especificaciones</p>;
    return skuSpecifications.map(({ field, values }: any) => {
      const { name: nameField } = field
      return (
        <>
          <p>{nameField}:</p>
          <>
            {
              values.map(({name}: any) => (
                <p>{name}</p>
              ))
            }
          </>
        </>
      )
    });
  }

  return (
    <div>
      { rendered() }
    </div>
  )
}

export default RenderSpecifications
