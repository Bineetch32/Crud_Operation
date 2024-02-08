import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  constructor(public css:CommonService) { }
  
  emp: Employee[];


  

  ngOnInit(): void {}


  submitdata(emp:Employee){

if(emp.id==null){

  this.css.postdata(emp).subscribe();
  window.location.reload();

}
else{
  this.css.updatedata(emp).subscribe();
  window.location.reload();

}
  }

  resetdata(){
    this.css.e=Object.assign({},null);
  }

}