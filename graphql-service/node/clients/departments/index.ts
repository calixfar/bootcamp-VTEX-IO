import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";
import normalizeData from "../helpers/normalizeData";

export class DepartmentsClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://renspets.free.beeceptor.com/', context, options)
  }

  public departments = async () => {
    try {
      const response: any = await this.http.get('/')
      return normalizeData(Object.values(response))
    } catch (error) {
      return {}   
    }
  }
  public department = async (value: any) => {
    try {
      const response: any = await this.http.get('/')
      if(!response[value]) throw new Error()
      const temp = {
        ...response[value],
        cities: response[value].municipalities
      }
      return temp
    } catch (error) {
      return {}
    }
  }
}