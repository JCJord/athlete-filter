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
        //this.athletes.push(...response)
        this.athletes.push(...response)
      })
  }

  getAthletes () {
    return this.athletes
  }

  addAthlete (
    athlete: string,
    age: number,
    country: string,
    year: number,
    date: string,
    sport: string,
    gold: number,
    silver: number,
    bronze: number,
    total: number
  ) {
    this.athletes.unshift({
      athlete,
      age,
      country,
      year,
      date,
      sport,
      gold,
      silver,
      bronze,
      total
    })
  }
}
