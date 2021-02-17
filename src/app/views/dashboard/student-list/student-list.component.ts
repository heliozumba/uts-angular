import { Component, OnInit } from '@angular/core'
import { RenderPanelService } from 'src/app/services/render-panel.service'
import { StudentService } from 'src/app/services/student.service'
import { Student } from 'src/app/shared/models/student'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listStudents: Student[] = []

  constructor (
    private panelRender: RenderPanelService,
    private studentService: StudentService
  ) {}

  ngOnInit (): void {
    this.studentService.getAllStudents().subscribe(result => {
      this.listStudents = result
      console.table(this.listStudents)
    })
  }

  changePanel (component: string) {
    this.panelRender.setPanel(component)
  }
}
