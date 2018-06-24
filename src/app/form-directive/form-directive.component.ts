import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-directive',
  templateUrl: './form-directive.component.html',
  styleUrls: ['./form-directive.component.scss']
})
export class FormDirectiveComponent implements OnInit {
  formSignUp: FormGroup;


  constructor( private fb: FormBuilder ) {



    }
  onSubmit() {
    console.log(this.formSignUp.value);
  }


  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['ahihi', [Validators.email, Validators.required, gmailValidator]],
      password: 'abc',
      subject : this.fb.group({
        angular: true,
        nodeJS: false,
        react: false,
      })
    });

  }


}
function gmailValidator(formControl: FormControl) {
  if (formControl.value.includes('@gmail')) {
    return null;
  }
  return {gmail : true};

}
