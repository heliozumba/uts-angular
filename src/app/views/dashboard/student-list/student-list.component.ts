import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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
    private studentService: StudentService,
    private route: Router
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

  studentToEdit (student: Student) {
    this.panelRender.setEdit()
    this.panelRender.setStudent(student)
    console.log(student, this.panelRender.getEdit())
  }

  studentToDelete (student: Student) {
    console.log(student)
    this.panelRender.setStudent(student)
  }

  deleteStudent (id: any) {
    this.studentService.deleteStudent(id).subscribe(
      data => {
        console.log('Cliente Eliminado')
        setTimeout(() => {
          this.route
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.route.navigate(['/estudantes']) //Deve mandar para a lista quando a rota estiver feita
            })
        }, 3000)
      },
      error => {
        console.log(error)
      }
    )
  }
}
