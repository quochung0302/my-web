import { Component, OnInit } from '@angular/core';
import { getParseErrors } from '@angular/compiler';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  onSubmit(formSignIn) {
    console.log(formSignIn.value);

  }

  constructor() { }

  ngOnInit() {
  }



}



