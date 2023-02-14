import { Component, OnInit } from '@angular/core';
import { Student } from '../studentModel/student.model';
import { StudentService } from '../studentServices/student.service';
import { Router } from '@angular/router';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from '../delete/deleteOfStudent/delete.component';
import { ToastrService } from 'ngx-toastr';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  //dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  students;
  form=new Student();
  constructor(private student_Services:StudentService,private router: Router,public modalService: NgbModal,private toastr: ToastrService) { }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.getStudent()
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true
    // };
  }
  nextButtonClickEvent(): void {
    //do next particular records like  101 - 200 rows.
    //we are calling to api

    console.log('next clicked')
  }
  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }

  
  previousButtonClickEvent(): void {
    //do previous particular the records like  0 - 100 rows.
    //we are calling to API
  }

  //get data of student
  getStudent(){
    this.student_Services.student_List()
    .subscribe(
      data => this.students = data

    )


  }
  
 //delete student
  deleteStudent(id: number){
    this.student_Services.delete(id).subscribe((response)=>{
      alert("record deleted successfully")
      this.getStudent()

    },(error=>{
    }));
  }
  //open delete modal
  openModal(id:Student) {
    debugger
    this.modalService.open(DeleteComponent).result.then((confirm)=>{
    console.log(confirm)
     if(confirm==true)
     {
      this.toastr.success("Record deleted");
      this.getStudent();
     }
    
    })
   
    this.student_Services.getStudentById1(id);
  }
  
}
