
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';



import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

@NgModule({
  declarations: [AppComponent,  CreateEmployeeComponent, EmployeeDetailsComponent, EmployeeListComponent, UpdateEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule,MatCardModule,MatButtonModule, FormsModule,
    HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
