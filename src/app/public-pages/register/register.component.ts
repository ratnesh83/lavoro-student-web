import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService,ToastrService]
})
export class RegisterComponent implements OnInit {
  submit: boolean = false;

  degrees = [
    { value: 'B.Tech', viewValue: 'B.Tech' },
    { value: 'B.E', viewValue: 'B.E' },
  ];

  streams = [
    { value: 'Computer Science', viewValue: 'Computer Science' },
    { value: 'Information Technology', viewValue: 'Information Technology' },
  ];

  genders = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];

  technologies = [
    { value: 'Java', viewValue: 'Java' },
    { value: 'C', viewValue: 'C' },
    { value: 'C++', viewValue: 'C++' },
    { value: 'Html', viewValue: 'Html' },
    { value: 'Css', viewValue: 'Css' },
    { value: 'JavaScript', viewValue: 'JavaScript' },
    { value: 'Php', viewValue: 'Php' },
    { value: 'Angular', viewValue: 'Angular' },
    { value: 'Node', viewValue: 'Node' },
    { value: 'React', viewValue: 'React' },
    { value: 'Vue', viewValue: 'Vue' },
    { value: 'Bootstrap', viewValue: 'Bootstrap' },
    { value: '.Net', viewValue: '.Net' },
    { value: 'Python', viewValue: 'Python' },
    { value: 'Sql', viewValue: 'Sql' },
    { value: 'Hadoop', viewValue: 'Hadoop' },
  ];

  constructor(private auth: AuthService,private toastr:ToastrService,private router:Router) { }
 
  ngOnInit() {
  }

  form = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required]),
    'name': new FormControl('', [Validators.required]),
    'gender': new FormControl('', [Validators.required]),
    'college': new FormControl('', [Validators.required]),
    'degree': new FormControl('', [Validators.required]),
    'stream': new FormControl('', [Validators.required]),
    'technology': new FormControl('', [Validators.required])
  });

  onSubmit(value) {
    this.submit = true;
    if (this.form.valid) {
      console.log(value);
      this.auth.register(value).subscribe((data) => {
        this.toastr.success('Successfully Registered','Have Fun');
        this.router.navigate(['/app']);
        console.log(data);
      });
    }
  }
}
