import { Athlete } from './athlete.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AthleteListService {
  athletes: Athlete[] = []

  constructor (private http: HttpClient) {
    this.getData()
  }

  getData () {
    this.http
      .get<[Athlete]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe(response => {
        console.log(response)
        this.athletes.push(...response)
        console.log(this.athletes)
      })
  }

  getAthletes () {
    return this.athletes
  }
}
