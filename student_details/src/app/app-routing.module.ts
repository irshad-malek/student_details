import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './shared/addStudent/add-student.component';
import { DetailsComponent } from './shared/detailsOfStudent/details.component';
import { EditStudentComponent } from './shared/editOfStudent/edit-student.component';
import { StudentListComponent } from './shared/listOfStudent/student-list.component';
const routes: Routes = [

  {
    path: '', component: StudentListComponent
  },
  {
    path: 'add-Student', component: AddStudentComponent,
  },
  {
    path: 'app-student-list', component: StudentListComponent
  }
  ,
  {
    path: 'edit/:student.id', component: EditStudentComponent
  },
  {
    path: 'details/:student.id', component: DetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
