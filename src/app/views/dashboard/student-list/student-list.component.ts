import { Component, OnInit } from '@angular/core'
import { RenderPanelService } from 'src/app/services/render-panel.service'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor (private panelRender: RenderPanelService) {}

  ngOnInit (): void {}

  changePanel (component: string) {
    this.panelRender.setPanel(component)
  }
}
