import { Directive, EventEmitter, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, ControlContainer, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {StudentService} from '../shared/studentServices/student.service'
import { Student } from './studentModel/student.model';

@Directive({
  selector: '[uniqueUsernamevalue]',
  providers: [
    {
      provide:  NG_ASYNC_VALIDATORS,
      useExisting: EmailexistDirective,
      multi: true,
    },
  ],
})


export class EmailexistDirective implements AsyncValidator {
 // private student: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
  
  
ngOnInit(){
}
 
formUtilisateur:FormGroup
validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  debugger
//   const  name = this.formUtilisateur.get('id') as FormControl;
// console.log(name)

const anotherCtrl = control.parent.value.id;

 return this.ServicesService.getUserByEmail(control.value,anotherCtrl).pipe(
    map(users=>{
      debugger
      console.log(users)
      return users ? { Email: { value: control.value } } : null;
  })
  );
}


  constructor(private ServicesService:StudentService) { }
}



  