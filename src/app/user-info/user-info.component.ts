import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService, User } from '../services/user';
import { Observable } from "rxjs/Observable";
import { FormControl, NgModel } from '@angular/forms';
import { GlobalVariable } from "app/services/shared";
import { Router } from "@angular/router/";

@Component({
  selector: 'app-user-info',
  providers: [UserService],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @ViewChild('pinModel') pinModel: NgModel;
  @ViewChild('cityModel') cityModel: NgModel;
  progress: boolean = false;
  cities: string[] = [];
  //citiesFormControl:FormControl = new FormControl({value: '', disabled: true});
  filteredCities: Observable<string[]>;
  model: User = new User(GlobalVariable.getEmail());
  timeout: any;


  constructor(private userService: UserService, private router: Router) {
    this.model.mobile = GlobalVariable.getMobile();
  }


  ngOnInit() {
    this.pinModel.control.valueChanges.subscribe(v => {
      console.log("Value Changed to " + v);
      v = "" + v;
      clearTimeout(this.timeout);
      if (v.length == 6) {
        this.timeout = setTimeout(() => {
          this.userService.getCitiesByPin(v).subscribe(data => {
            this.cities = data['cities'];
            this.filteredCities = this.cityModel.control.valueChanges.startWith(null)
              .map(name => this.filterCities(name));
          });
        }, 1000)
      } else {
        this.cityModel.control.reset();
        this.cities=[];
      }
    });

  }


  //For input type=number, it doesnt allow numeric characters post maxChars
  onKeyDown(event: any, maxChars) {
    if (event.target.value.length == maxChars && (event.keyCode >= 48 && event.keyCode <= 57)) {
      event.preventDefault();
    }
  }

  filterCities(val: string) {
    return val ? this.cities.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.cities;
  }

  onSubmit(){
    console.log(this.model); 
    /*TODO:Persist user and handle succeess and failure*/
    this.router.navigate(['/retailer-info']);
    return false;
  }

}