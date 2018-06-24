import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;

  constructor( private fb: FormBuilder) {

   }


  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.email, Validators.required, gmailValidator]],
      password: 'ahihi',
      subject : this.fb.group({
        nodeJS : false,
        angular : true,
        react : false
      })
    });
      }
      onSubmit() {
        console.log(this.formSignUp.value);
      }


}
function gmailValidator(formControl: FormControl): {gmail: boolean} {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return {gmail: true};

}




