import { Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Component, Inject} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent{
  
  

  constructor(private router: Router, private api: ApiService) { }



  ngOnInit() {
    // this.api.login().subscribe((data) => {
    //   console.log(data);
    // });
  }

  form = new FormGroup({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });

  submit(value) {
    console.log(value);
  }

}
