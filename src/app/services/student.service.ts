import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Student } from '../shared/models/student'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor (private http: HttpClient) {}

  endpoint = `${environment.urlBase}/estudantes`

  createStudent (student: Student) {
    return this.http.post(this.endpoint, student)
  }

  getAllStudents (): Observable<any> {
    return this.http.get(this.endpoint)
  }

  getStudentById (id: any): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`)
  }

  editStudent (student: Student) {
    return this.http.put(`${this.endpoint}/${student.id}`, student)
  }

  deleteStudent (id: any) {
    return this.http.delete(`${this.endpoint}/${id}`)
  }
}
