import { Component, OnInit } from '@angular/core'
import { RenderPanelService } from 'src/app/services/render-panel.service'
import { StatisticsComponent } from 'src/app/views/dashboard/statistics/statistics.component'
import { StudentListComponent } from 'src/app/views/dashboard/student-list/student-list.component'
import { StudentRegisterComponent } from 'src/app/views/dashboard/student-register/student-register.component'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  constructor (private panelRender: RenderPanelService) {}

  ngOnInit (): void {}

  get panel (): any {
    switch (this.panelRender.getPanel().value) {
      case 'statistics':
        return StatisticsComponent
      case 'students':
        return StudentListComponent
      case 'student-register':
        return StudentRegisterComponent
    }
  }
}
