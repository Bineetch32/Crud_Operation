import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  exports: [EmployeeListComponent,EmployeeComponent]
})
export class ModuleModule { }
