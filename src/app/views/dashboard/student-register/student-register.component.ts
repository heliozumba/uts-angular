import { Component, OnInit } from '@angular/core'
import { Student } from '../../../shared/models/student'
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  student: Student = {
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
    gender:''
  }

  constructor () {}

  ngOnInit (): void {}

  registerStudent () {
    console.log(this.student)
  }
}
