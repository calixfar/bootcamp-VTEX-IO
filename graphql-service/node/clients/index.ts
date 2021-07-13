import { IOClients } from '@vtex/api'

import { DepartmentsClient } from './departments'

export class Clients extends IOClients {
  get departments() {
    return this.getOrSet('departments', DepartmentsClient)
  }
}
