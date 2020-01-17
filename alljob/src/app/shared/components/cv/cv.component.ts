import { Component, OnInit, Input } from '@angular/core';
import { Cv } from '../../interfaces';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  cvs: Cv[] = []
  search = ''

  @Input() cv: Cv
  constructor() { }

  ngOnInit() {
  }



}
