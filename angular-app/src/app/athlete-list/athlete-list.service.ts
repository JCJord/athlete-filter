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
        const filter = response.filter(p => p.country === 'Brazil')
        console.log(filter)
        this.athletes.push(...filter)
      })
  }

  getAthletes () {
    return this.athletes
  }
}
