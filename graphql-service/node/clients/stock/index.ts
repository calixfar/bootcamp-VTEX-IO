import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

const data: any = {
  '158': [
    {
      "name": "SS Kennedy",
      "WarehouseId": "CL13_A001",
      "address": "Av. Kennedy 8017, Esq. Las Tranqueras - Casa Matriz, Las Condes",
      "lat": -33.392107,
      "lng": -70.55313,
      "phone": "Tel.+56 22754 6154",
      "schedule": "Lunes A Viernes De 08:30 A 20:00, \nSábado De 10:00 A 21:00 Y Domingo De 11:00 A 21:00 Servicio Técnico: Teléfono: 227546121 \nAtención Servicio Tecnico L-V 8:30 A 18:00, Sabado De 10:00 A 14:00"
    },
    {
      "name": "SS Plaza Vespucio",
      "WarehouseId": "CL1C_A001",
      "address": "Av. Vicuña Mackenna Oriente 7110, Local 732 (segundo Piso) - Mall Plaza  /  Vespucio, La Florida",
      "lat": -33.517595817,
      "lng": -70.5980908871,
      "phone": "Tel.+56 22586 3411",
      "schedule": "Lunes A Domingo De 10:00 A 22:00."
    },
    {
        "name": "Costanera Center",
        "WarehouseId": "CL1M_A001",
        "address": "Av. Andres Bello 2461, Local 1154 - Mall Costanera Center, Providencia.",
        "lat": -33.417993,
        "lng": -70.60639,
        "phone": "Tel.+56 22618 9796",
        "schedule": "Lunes A Domingo De 10:00 A 22:00."
      }
  ],
  '159': [
    {
        "name": "Costanera Center",
        "WarehouseId": "CL1M_A001",
        "address": "Av. Andres Bello 2461, Local 1154 - Mall Costanera Center, Providencia.",
        "lat": -33.417993,
        "lng": -70.60639,
        "phone": "Tel.+56 22618 9796",
        "schedule": "Lunes A Domingo De 10:00 A 22:00."
      }
  ],
  '160': []
}

export class StockClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://renspets.free.beeceptor.com/', context, options)
  }

  public stock = async (skuId: string) => {
    try {
      if( !data[skuId] ) throw new Error()
      const response = data[skuId]
      // const response: any = await this.http.get(`stock/${skuId}`)
      return response
    } catch (error) {
      return {}
    }
  }
}