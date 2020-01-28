import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  constructor() { }

  index = 1;
 
  limitStr = 0;
  limitEnd = 3;

  collegeName = "montreal college of information technology";
  Amount = 545475.23; 

  da = new Date();

  servers = ['test server node1', 'pre prod server node2', 'prod server node 3', 'UAT server node 2'];

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
{name : 'Daniel', id:109, salary:15000,country:'canada',joinDate:new Date(2009,10,11),department:'chemist'},
{name : 'Ram', id:103, salary:45000,country:'canada',joinDate:new Date(2012,10,11),department:'computers'},
{name : 'Bob', id:104, salary:55000,country:'usa',joinDate:new Date(2013,10,11),department:'chemist'},
{name : 'Foo', id:105, salary:65000,country:'canada',joinDate:new Date(2014,10,11),department:'computers'},
{name : 'Papa', id:106, salary:75000,country:'australia',joinDate:new Date(2015,10,11),department:'computers'},
{name : 'King', id:107, salary:85000,country:'canada',joinDate:new Date(2017,10,11),department:'math'},
{name : 'Queen', id:108, salary:95000,country:'usa',joinDate:new Date(2016,10,11),department:'computers'},
{name : 'Daniel', id:109, salary:15000,country:'canada',joinDate:new Date(2009,10,11),department:'chemist'}
];

totalPages = [];

ngOnInit() {
      // get the employees length to handle pagination logic
      let j = 0;
      for(let i = 3; i<= this.Employees.length; i = i+3){
            j = j+1;
            this.totalPages.push(j);
      }
}

getCountry(c){
 switch(c){
   case 'canada'  : 
        return 'CAD';
  case 'usa'  : 
        return 'USD';
  case 'australia'  : 
        return 'AUD'; 
  default : 
        return c;
       
 }
}

onPageClick(page : any){
            console.log("Page "+page+ " has been clicked");
                  this.index = page;
            if(page > 1){
                  this.limitStr = (page-1)*3;
                  this.limitEnd = (page)*3;
            }else{
                  this.limitStr = 0; // 1-1*3 = 0
                  this.limitEnd = 3; // 1*3 = 3
            }
}

onPrevious(previous : boolean){
      
            if(previous){ // means, click on previous button
                  this.index = this.index -1;
                  this.limitStr = this.limitStr - 3;
                  this.limitEnd = this.limitEnd - 3;
            }else{ // means, click on next button
                  this.index = this.index +1;
                  
                  this.limitStr = this.limitStr + 3;
                  this.limitEnd = this.limitEnd + 3;
            }
}

onFirst(first : boolean){
            if(first){
                  this.limitStr = 0;
                  this.limitEnd = 3
            }else{
                  this.limitStr = this.Employees.length -3;
                  this.limitEnd = this.Employees.length;
            }
}
order = undefined;

onOrderBy(orderBy : any){
      this.order = orderBy;
}
}
