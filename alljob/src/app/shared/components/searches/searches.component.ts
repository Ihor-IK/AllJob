import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  e: number = Math.E
  str = "hello world"
  date: Date = new Date()
}
