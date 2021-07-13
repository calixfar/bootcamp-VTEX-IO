export const departments  = async (
  _: unknown,
  __: any,
  { clients: { departments: departmentsClient } }: Context
) => departmentsClient.departments()