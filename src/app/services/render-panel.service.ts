import { Component, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Student } from '../shared/models/student'
import { StatisticsComponent } from '../views/dashboard/statistics/statistics.component'
import { StudentListComponent } from '../views/dashboard/student-list/student-list.component'

@Injectable({
  providedIn: 'root'
})
export class RenderPanelService {
  private panelComponent = new BehaviorSubject<string>('statistics')
  private student: any
  private edit = false

  /* panelComponent = StatisticsComponent */

  constructor () {}

  setPanel (component: string) {
    this.panelComponent.next(component)
  }

  getPanel () {
    return this.panelComponent
  }

  getStudent () {
    return this.student
  }

  setStudent (student: any) {
    this.student = student
  }

  setEdit () {
    this.edit = !this.edit
  }

  getEdit () {
    return this.edit
  }

  /*  assignComponent (component: any) {
    console.log(this.panelComponent)
    switch (component) {
      case 'students':
        this.panelComponent = StudentListComponent
    }
  } */
}
