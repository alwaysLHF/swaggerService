import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: string;
  password: string;
  rePassword: string;
  respData: object;


  constructor(private httpRequestService: HttpRequestService, private router: Router) { }

  ngOnInit() {
  }

  updateRpw(rpw: string) {
    this.rePassword = rpw;
  }

  onSubmit(formData) {
    let respData: object;
    if (formData.form.valid && this.password === this.rePassword) {

      const reqBody = {userName: this.userName};
      respData = this.httpRequestService.register(reqBody).subscribe(
        data => {
          alert(data['return_msg']);

          if (data['return_code'] === '9000') {
            this.goBack();
          }
        }
      );

    }
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
