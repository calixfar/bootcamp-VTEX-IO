import React from 'react'
import { useProduct } from 'vtex.product-context'


const categoriesSizesGuide: any = {
  '/Dogs/Food/': {
    image: '/arquivos/renspets-main-logo.png'
  },
  '/Dogs/Treats/': {
    image: 'https://craft-production.imgix.net/2020/08/28123153/Size-guide-Dam-eng.jpg?q=70&fit=clip&w=1287&fm=jpg&auto=format'
  },
}

const SizeGuide = () => {

  const { product: { categories } } = useProduct();

  const selectedCategory = categories.find((category: string) => categoriesSizesGuide[category])

  console.log('selectedCategory', selectedCategory)

  if( !selectedCategory ) return <></>;

  return (
    <div>
      <img src={categoriesSizesGuide[selectedCategory].image}/>
    </div>
  )
}

export default SizeGuide;
