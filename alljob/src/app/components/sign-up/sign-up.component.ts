import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/components/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

      constructor(
      public authService: AuthenticationService
    ) { }
  
    ngOnInit() { }
  
  }
