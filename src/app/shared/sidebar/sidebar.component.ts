import { Component, OnInit } from '@angular/core'
import { RenderPanelService } from 'src/app/services/render-panel.service'
import { StudentListComponent } from 'src/app/views/dashboard/student-list/student-list.component'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor (private panelRender: RenderPanelService) {}

  ngOnInit (): void {}
  
  
  changePanel(panel: string) {
    this.panelRender.setPanel(panel);
  }

 /*  assignRender (component: any) {
    this.panelRender.assignComponent('student')
    /* console.log(component)
    this.panelRender.assignComponent(component) 
  } */
}
