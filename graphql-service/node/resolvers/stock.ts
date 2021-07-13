export const stock  = async (
  _: unknown,
  { skuId }: { skuId: string },
  { clients: { stock: stockClient } }: Context
) => stockClient.stock(skuId)