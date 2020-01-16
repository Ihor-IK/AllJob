import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CvAlertService } from '../shared/services/cv-alert.service';
import {CvsService} from '../../shared/cv.service';
import { Cv } from '../../shared/interfaces';

@Component({
  selector: 'app-cv-create-page',
  templateUrl: './cv-create-page.component.html',
  styleUrls: ['./cv-create-page.component.scss']
})
export class CvCreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(private cvsService: CvsService,
    private alert: CvAlertService ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      Description: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      Skills: new FormControl(null, Validators.required),
      dateEnd: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
  
    const cv: Cv = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
      dateEnd: this.form.value.dateEnd,
      city: this.form.value.city,
      Description: this.form.value.Description,
      salary: this.form.value.salary,
      type: this.form.value.type,
      Skills: this.form.value.Skills
    }

    this.cvsService.create(cv).subscribe(() => {
      this.form.reset()
      this.alert.success('The cv was created')
    })
    // console.log(cv)
  }

}