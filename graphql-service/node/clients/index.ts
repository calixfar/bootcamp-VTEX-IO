import { IOClients } from '@vtex/api'

import { DepartmentsClient } from './departments'
import { StockClient } from './stock'

export class Clients extends IOClients {
  get departments() {
    return this.getOrSet('departments', DepartmentsClient)
  }
  get stock() {
    return this.getOrSet('stock', StockClient)
  }
}
