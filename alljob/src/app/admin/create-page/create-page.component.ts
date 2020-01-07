import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Job} from '../../shared/interfaces';
import { JobsService } from 'src/app/shared/jobs.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(private jobsService: JobsService,
    private alert: AlertService ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      companyDescription: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      requiredSkills: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const job: Job = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
      city: this.form.value.city,
      companyDescription: this.form.value.companyDescription,
      salary: this.form.value.salary,
      type: this.form.value.type,
      requiredSkills: this.form.value.requiredSkills
    }

    this.jobsService.create(job).subscribe(() => {
      this.form.reset()
      this.alert.success('The job was created')
    })
    // console.log(job)
  }

}
