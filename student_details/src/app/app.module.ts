import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/common/header/header.component';
import { FooterComponent } from './shared/common/footer/footer.component';
import { StudentListComponent } from './shared/listOfStudent/student-list.component';
import { AddStudentComponent } from './shared/addStudent/add-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './shared/editOfStudent/edit-student.component';
import { DeleteComponent } from './shared/delete/deleteOfStudent/delete.component';
import { DetailsComponent } from './shared/detailsOfStudent/details.component';
import { InterceptorsService } from './shared/interceptorServices/interceptors.service';
import { EmailvalidatorDirective } from './shared/emailvalidator.directive';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EmailexistDirective } from './shared/email-exist.directive';
import {DataTablesModule} from 'angular-datatables';
import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    DeleteComponent,
    DetailsComponent,
    EmailvalidatorDirective,
    EmailexistDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule ,
    LottieModule.forRoot({ player: playerFactory })

    // NgbModalModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorsService,
    multi: true
  }],
  bootstrap: [AppComponent],
   entryComponents: [ DeleteComponent ]

})
export class AppModule { }
