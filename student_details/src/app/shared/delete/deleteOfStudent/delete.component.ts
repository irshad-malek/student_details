import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../studentServices/student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private _NgbActiveModal: NgbActiveModal, private student_Services: StudentService,private toastr: ToastrService) { }
  students;
  //to get value of behaviour subject
  ngOnInit(): void {
    this.student_Services.getMethod().subscribe(
      data => this.students = data
    )
  }
  //to show modal popup 
  get activeModal() {
    return this._NgbActiveModal;
  }
  //to confirm delete of method
  confirmDelete(id: number) {
    debugger
    this.student_Services.delete(id).subscribe((response) => {
      
     this.activeModal.close(true)

    });
  }
  //to get student 
  getStudent() {
    this.student_Services.student_List()
      .subscribe(
        data => this.students = data
      )
  }
}
