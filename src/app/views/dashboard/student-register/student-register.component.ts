import { Component, OnInit } from '@angular/core'
import { Student } from '../../../shared/models/student'
import { FormControl, FormGroup } from '@angular/forms'
import { StudentService } from 'src/app/services/student.service'
import { Router } from '@angular/router'

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

  constructor (private studentService: StudentService, private route: Router) {}

  ngOnInit (): void {}

  registerStudent () {
    
    this.studentService.createStudent(this.studentForm.value).subscribe(
      data => {
        console.log('Estudante registrado')
        setTimeout(() => {
          this.route.navigate(['/dashboard']) //Deve mandar para a lista quando a rota estiver feita
        }, 3000)
      },
      error => {
        console.log(error)
        console.log('Falha no registro')
      }
    )
  }
}
