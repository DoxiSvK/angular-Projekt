import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentArr: any[] = [];
  student: any = {
    studentId: 0,
    fullName: '',
    fullName1: '',
    datumNarodenia: '',
    pohlavie: '',
    trieda: '',
    odbor: '',
    disabled: '',
    vazPriemer: '',
    vek: '',
    ocenenia: '',
  };
  isSelectAll: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('studentList');
    if (localData != null) {
      this.studentArr = JSON.parse(localData);
    }
  }
  onCheckAll() {
    for (let i = 0; i < this.studentArr.length; i++) {
      this.studentArr[i].isChecked = this.isSelectAll;
    }
  }
  onAddStudent() {
    const notNull = document.getElementById('studentModel');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
    this.student = {
      studentId: 0,
      fullName: '',
      fullName1: '',
      datumNarodenia: '',
      pohlavie: '',
      trieda: '',
      odbor: '',
      disabled: '',
      vazPriemer: '',
      vek: '',
      ocenenia: '',
    };
  }
  onCloseModel() {
    const notNull = document.getElementById('studentModel');
    if (notNull != null) {
      notNull.style.display = 'none';
    }
  }
  onDelete(id: number) {
    for (let i = 0; i < this.studentArr.length; i++) {
      if (this.studentArr[i].studentId == id) {
        this.studentArr.splice(i, 1);
      }
    }
    localStorage.setItem('studentList', JSON.stringify(this.studentArr));
  }
  onEdit(stud: any) {
    this.onAddStudent();
    this.student = stud;
  }
  saveStudent(data: any) {
    if (this.studentArr.length == 10) { 
      alert('');
    } else {
      this.student.studentId = this.studentArr.length + 1;
      this.studentArr.push(this.student);
      this.onCloseModel();
      localStorage.setItem('studentList', JSON.stringify(this.studentArr));
    }
    this.student = {
      studentId: 0,
      fullName: '',
      fullName1: '',
      datumNarodenia: '',
      pohlavie: '',
      trieda: '',
      odbor: '',
      disabled: '',
      vazPriemer: '',
      vek: '',
      ocenenia: ''
    };
  }
  onUpdate() {
    const record = this.studentArr.find(
      (m) => m.studentId == this.student.studentId
    );
    record.fullName = this.student.fullName;
    localStorage.setItem('studentList', JSON.stringify(this.studentArr));
    this.onCloseModel();
  }
  onLogout() {
    this.router.navigate(['user-login']);
  }
}
