import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user";
import { GlobalVariable } from "app/services/shared";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router/";

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.component.html',
  providers: [UserService],
  styleUrls: ['./mobile-verify.component.css']
})
export class MobileVerifyComponent implements OnInit {
  email = GlobalVariable.getEmail();
  otpButtonDisabled = true;
  numberControl: FormControl = new FormControl();
  otpControl: FormControl = new FormControl();
  timeout: any;
  progress = false;
  validate = true;
  invalidOtp = false;
  otpFailedMessage;
  otpReference;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }




  onKey(event: any) {
    if (event.target.value.length == 10) {
      if (this.otpButtonDisabled && this.timeout == null) {
        this.timeout = setTimeout(() => {
          event.target.readOnly = true;
          this.userService.validateMobile(event.target.value)
            .subscribe(data => {
              event.target.readOnly = false;
              this.otpButtonDisabled = false;
            });

        }, 1000);
      }
    } else if (event.target.value.length > 10) {
      //this.showOtpButton = false;
      event.target.value = event.target.value.substr(0, 10);
    }
    else {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.otpButtonDisabled = true;
    }
  }

  onKeyDown(event: any, maxChars) {
    if (event.target.value.length == maxChars && (event.keyCode >= 48 && event.keyCode <= 57)) {
      event.preventDefault();
    }
  }

  onSelect() {
    this.router.navigate(['/user-info']);
  }

  requestOtp() {
    this.progress = true;
    this.userService.requestOtp(this.numberControl.value +"", GlobalVariable.getEmail()).subscribe(data => {
      console.log(data);
      if(data.result) {
        this.otpFailedMessage = undefined;
        this.otpReference = data.reference_id;
        this.validate = false;
      } else {
        this.otpFailedMessage = data.message;
      }
      this.progress = false;
    });
    return false;
  }

  verifyOtp() {
    let mobile = this.otpControl.value + "";
    this.progress = true;
    this.userService.verifyOtp(this.otpReference, this.otpControl.value + "").
      subscribe(data => {
        console.log(data);
        console.log(data.result);

        if (data.result) {
          GlobalVariable.setMobile(mobile);
          this.router.navigateByUrl('user-info');
        } else {
          this.progress = false;
          this.invalidOtp = true;
        }
      });
  }

  invalidate(){
    this.invalidOtp = false;
    this.validate = true;
  }


}
