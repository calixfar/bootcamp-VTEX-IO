export default (data: any[]) => {
  console.log(data)
  return data.map(({label, value, municipalities}: any) => ({
    label,
    value,
    cities: municipalities
  }))
}