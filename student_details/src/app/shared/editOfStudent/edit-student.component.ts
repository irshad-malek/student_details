import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../studentModel/student.model';
import { StudentService } from '../studentServices/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  form = new Student();
  id:number
  posts;
  valuedata;
  valuedata1
  value;
  constructor(private route: ActivatedRoute, private student_Services: StudentService, private router: Router,private toastr: ToastrService) { }
  // to get route id
  ngOnInit(): void {
    this.id = this.route.snapshot.params['student.id'];
    this.detailStudent(this.id);
  }
  //to get details for edit
  detailStudent(id: number) {
    debugger
    this.student_Services.getStudentById(id).subscribe((Response) => {
      this.form= Response
      // this.valuedata=Response.id
      // this.valuedata1=Response.email_Id
    })

  }

  //to update details
  updateUser() {
    this.student_Services.update(this.id, this.form)
      .subscribe(() => {
        this.toastr.success('','Record Updated', {timeOut: 3000})
        this.router.navigate(['']);
      })
  }

}
