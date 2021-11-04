import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { AthleteListService } from './athlete-list.service'
import { Athlete } from './athlete.model'

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.scss']
})
export class AthleteListComponent implements OnInit {
  athleteList: Athlete[] = []

  constructor (private athletelistService: AthleteListService) {}

  ngOnInit (): void {
    this.athleteList = this.athletelistService.getAthletes()
  }
}
