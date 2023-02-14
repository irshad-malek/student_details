import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Student } from '../studentModel/student.model';
import { StudentService } from '../studentServices/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/animation.json',
  
  };
  form = new Student();
  students;

  constructor(private student_Services: StudentService, private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }
  animationCreated(animationItem: AnimationItem): void {
    setTimeout(function() {
      animationItem.hide();
    }.bind(this), 1000);
  }
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
  //to submit student
  onSubmit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    this.addStudent();

  }

  //to get student
  getStudent() {
    this.student_Services.student_List()
      .subscribe(
        data => this.students = data
      )
  }
  //to reset student form
  onReset(form: NgForm): void {
    form.reset();
  }
  //to add student form
  addStudent() {
    debugger
    this.student_Services.add_Student(this.form).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
      this.router.navigate(['']);
    })
  }
  
}
