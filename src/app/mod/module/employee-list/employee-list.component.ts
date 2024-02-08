import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private cs: CommonService) { }

  em: Employee[]

  
  
  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.cs.getdata().subscribe(
      (data: Employee[]) => {
        this.em = data;
      }
    );
  }

  editdata(emp: Employee) {
    this.cs.e = Object.assign({}, emp);
  }

  deletedata(emp: Employee) {
    this.cs.deletedata(emp).subscribe(() => {
      // Refresh data after successful deletion
      this.getdata();
    });

}}
