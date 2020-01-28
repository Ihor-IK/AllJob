import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students = [{sname : 'Jack', sid : '101', scourse : 'Angular', pass : true, fail : false}]

  sname ;
  sid;
  scourse;
  pass;
  fail;

  onSubmit(){
    // this.students.push()

    this.students.push(
      {sname : this.sname, sid : this.sid, scourse : this.scourse, pass : this.pass, fail : this.fail}
    )
  }
}
