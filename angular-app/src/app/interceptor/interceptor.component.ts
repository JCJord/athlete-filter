import { Component, OnInit } from '@angular/core'
import { AthleteListService } from '../athlete-list/athlete-list.service'

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss']
})
export class InterceptorComponent implements OnInit {
  constructor (private athleteListService: AthleteListService) {}

  ngOnInit (): void {}

  addAthlete () {
    this.athleteListService.addAthlete(
      'Antonio',
      22,
      'Brazil',
      1984,
      '29/05/1984',
      'Football',
      1,
      2,
      3,
      6
    )
  }
}
