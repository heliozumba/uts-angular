import { Component, OnInit } from '@angular/core'
import { RenderPanelService } from 'src/app/services/render-panel.service'
import { StudentService } from 'src/app/services/student.service'
import { Student } from '../models/student'

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  student: any

  constructor (
    private panelRender: RenderPanelService,
    private studentService: StudentService
  ) {}

  ngOnInit (): void {
    /* this.student = this.panelRender.getStudent() */
  }

  deleteStudent (id: any) {
    this.studentService.deleteStudent(id).subscribe(
      data => {
        console.log('Cliente Eliminado')
      },
      error => {
        console.log(error)
      }
    )
  }
}
