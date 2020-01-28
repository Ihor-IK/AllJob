import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles : [`
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even){background-color: #f2f2f2}
  
  th {
    background-color: #4CAF50;
    color: white;
  }
  `]
})
export class AppComponent {
  displayStudents = true;
  displayEmployees = false;
  displayDirectives = false;
  displayPipes = false;

  onStudentsClick(){
    this.displayStudents = true;
    this.displayEmployees = false;
    this.displayDirectives = false;
    this.displayPipes = false;
  }

  onEmployeesClick(){
    this.displayEmployees = true;
    this.displayStudents = false;
    this.displayDirectives = false;
    this.displayPipes = false;
  }

  onDirectivesDemoClick(){
    this.displayEmployees = false;
    this.displayStudents = false;
    this.displayDirectives = true;
    this.displayPipes = false;
  }

  onPipesDemoClick(){
    this.displayEmployees = false;
    this.displayStudents = false;
    this.displayDirectives = false;
    this.displayPipes = true;
  }
}
