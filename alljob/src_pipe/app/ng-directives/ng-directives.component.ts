import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 accounts = true;
 home = false;
 login = false;
 banking = false;

  message;

  numbers = [1,3,5,7,9,11];
 servers = [
  {name : 'testServer', content : 'this is test server', status : 'offline'},
  {name : 'prodServer', content : 'this is prod server', status : 'online'},
  {name : 'devServer', content : 'this is dev server', status : 'offline'},
  {name : 'UATServer', content : 'this is UAT server', status : 'online'}
];
  
Employees = [{name : 'Jhon', id:101, salary:25000,country:'canada',joinDate:new Date(2010,10,11),department:'computers'},
{name : 'Jack', id:102, salary:35000,country:'usa',joinDate:new Date(2011,10,11),department:'math'},
{name : 'Ram', id:103, salary:45000,country:'canada',joinDate:new Date(2012,10,11),department:'computers'},
{name : 'Bob', id:104, salary:55000,country:'usa',joinDate:new Date(2013,10,11),department:'chemist'},
{name : 'Foo', id:105, salary:65000,country:'canada',joinDate:new Date(2014,10,11),department:'computers'},
{name : 'Papa', id:106, salary:75000,country:'australia',joinDate:new Date(2015,10,11),department:'computers'},
{name : 'King', id:107, salary:85000,country:'canada',joinDate:new Date(2017,10,11),department:'math'},
{name : 'Queen', id:108, salary:95000,country:'usa',joinDate:new Date(2016,10,11),department:'computers'},
{name : 'Daniel', id:109, salary:15000,country:'canada',joinDate:new Date(2009,10,11),department:'chemist'},
{name : 'Jhon', id:101, salary:25000,country:'canada',joinDate:new Date(2010,10,11),department:'computers'},
{name : 'Jack', id:102, salary:35000,country:'usa',joinDate:new Date(2011,10,11),department:'math'},
{name : 'Ram', id:103, salary:45000,country:'canada',joinDate:new Date(2012,10,11),department:'computers'},
{name : 'Bob', id:104, salary:55000,country:'usa',joinDate:new Date(2013,10,11),department:'chemist'},
{name : 'Foo', id:105, salary:65000,country:'canada',joinDate:new Date(2014,10,11),department:'computers'},
{name : 'Papa', id:106, salary:75000,country:'australia',joinDate:new Date(2015,10,11),department:'computers'},
{name : 'King', id:107, salary:85000,country:'canada',joinDate:new Date(2017,10,11),department:'math'},
{name : 'Queen', id:108, salary:95000,country:'usa',joinDate:new Date(2016,10,11),department:'computers'},
{name : 'Daniel', id:109, salary:15000,country:'canada',joinDate:new Date(2009,10,11),department:'chemist'}
];

 linkClick(){
    this.message = "hyper link click event generated";
    alert("hyper link click event generated")
  }

  buttonClick(){
    this.message = "button click event generated";
    alert("button link click event generated")
  }
disable = false;
num = 1;

onDisable(){
    this.disable = !this.disable;

    this.message = "button has been disabled";
    alert("button has been disabled")
  }

  onIncrease(){
    this.num = this.num +1;
    
}

Travellers = [
  {name: 'Jack', country : 'Canada'}, 
  {name: 'Jhon', country : 'USA'}, 
  {name: 'Joe', country : 'Cuba'},
  {name: 'Jojee', country : 'Canada'},
  {name: 'Pablo', country : 'Jamaica'},
  {name: 'Jonatan', country : 'Mexico'},
  {name: 'Raj', country : 'India'}
]

}
