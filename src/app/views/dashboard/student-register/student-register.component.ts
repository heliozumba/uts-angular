import { Component, OnInit } from '@angular/core'
import { Student } from '../../../shared/models/student'
import { FormControl, FormGroup } from '@angular/forms'
import { StudentService } from 'src/app/services/student.service'
import { Router } from '@angular/router'
import { RenderPanelService } from 'src/app/services/render-panel.service'

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  /*  student: Student = {
    name: '',
    email: '',
    bi: '',
    phone: '',
    birthDate: '',
    id: '',
    academicLevel: '',
    institute: '',
    formationArea: '',
    address: '',
    gender: ''
  } */
  editMode: any

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    bi: new FormControl(''),
    phone: new FormControl(''),
    birthDate: new FormControl(''),
    id: new FormControl(''),
    academicLevel: new FormControl(''),
    institute: new FormControl(''),
    formationArea: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl('')
  })

  constructor (
    private studentService: StudentService,
    private route: Router,
    private panelRender: RenderPanelService
  ) {}

  ngOnInit (): void {
    this.editMode = this.panelRender.getEdit()
    if (this.editMode) {
      this.studentForm.patchValue(this.panelRender.getStudent())
    }
  }

  registerStudent () {
    this.studentService.createStudent(this.studentForm.value).subscribe(
      data => {
        console.log('Estudante registrado')
        setTimeout(() => {
          this.route.navigate(['/estudantes']) //Deve mandar para a lista quando a rota estiver feita
        }, 3000)
      },
      error => {
        console.log(error)
        console.log('Falha no registro')
      }
    )
  }

  editStudent () {
    this.studentService.editStudent(this.studentForm.value).subscribe(
      data => {
        console.log('Estudante Alterado')
        setTimeout(() => {
          this.route.navigate(['/estudantes']) //Deve mandar para a lista quando a rota estiver feita
        }, 3000)
      },
      error => {
        console.log(error)
        console.log('Estudante Não Alterado')
      }
    )
    this.panelRender.setEdit()
  }

  sendForm () {
    this.editMode ? this.editStudent() : this.registerStudent()
  }
}
