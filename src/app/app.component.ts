import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-panel';

  constructor(private formBuilder: FormBuilder) {

  }
  email = new FormControl('', [Validators.required, Validators.email])
  isEmailPage = true;
  otp!: number | null;
  counter: number = 0;
  onClickContinue() {
    this.isEmailPage = false;
    this.startCounter();
  }


  startCounter() {
    this.counter = 20;
    let referenceId =  setInterval(() => {
      if (this.counter == 1) {
        this.counter = 0;
        clearInterval(referenceId);
      } else {
        --this.counter;
      }
    }, 1000);
  }

  isValidOTP() {
    return String(this.otp).length === 6;
  }

  onClickBack() {
    this.isEmailPage = true;
  }

  onFinish() {
    this.isEmailPage = true;
    this.otp = null;
    this.email.reset();
  }
}
