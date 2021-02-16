import { Component, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { StatisticsComponent } from '../views/dashboard/statistics/statistics.component'
import { StudentListComponent } from '../views/dashboard/student-list/student-list.component'

@Injectable({
  providedIn: 'root'
})
export class RenderPanelService {
  private panelComponent = new BehaviorSubject<string>('statistics')

  /* panelComponent = StatisticsComponent */

  constructor () {}

  setPanel (component: string) {
    this.panelComponent.next(component)
  }

  getPanel () {
    return this.panelComponent
  }

  /*  assignComponent (component: any) {
    console.log(this.panelComponent)
    switch (component) {
      case 'students':
        this.panelComponent = StudentListComponent
    }
  } */
}
