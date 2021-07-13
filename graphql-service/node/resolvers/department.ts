export const department  = async (
  _: unknown,
  { value }: { value: string },
  { clients: { departments: departmentsClient } }: Context
) => departmentsClient.department(value)