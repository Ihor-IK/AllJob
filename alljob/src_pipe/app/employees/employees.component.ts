import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  ename = "MCIT";
  eid = 201;
  eorg = "Retail";
  displayPanelBody = true;

  Employees = [{ename : this.ename, eid : this.eid, eorg : this.eorg}];
  
  onPanelHeaderClick(){
    this.displayPanelBody = !this.displayPanelBody;
  }

  onSubmit(){
      this.Employees.push({ename : this.ename, eid : this.eid, eorg : this.eorg})
  }
}
