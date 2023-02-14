import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../studentModel/student.model';
import { StudentService } from '../studentServices/student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  form = new Student();

  id
  constructor(private router: Router, private route: ActivatedRoute, private student_Services: StudentService) { }
  //to get route id
  ngOnInit(): void {
    this.id = this.route.snapshot.params['student.id'];
    this.detailStudent(this.id)
  }
  //to get details of student
  detailStudent(id: number) {
    debugger
    this.student_Services.getStudentById(id).subscribe((Response) => {
      this.form=Response
    })
  }
  
}
