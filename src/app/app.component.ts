import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Menu } from "app/menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  containerVisible=true;
  sidenavDisplay = "block";
  selectedLink:string;
  stateCtrl: FormControl;
  filteredStates: any;
  navopen: string = "false";
  menuList = [];

  secondaryMap = [];
  tertiaryMap = [];
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho']

  constructor() {
    /*this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));*/

    var primaryActions:Menu[] = [];
    primaryActions.push(new Menu("deals", "local_offer", "Deals"));
    primaryActions.push(new Menu("recharge", "flash_on", "Recharge"));
    primaryActions.push(new Menu("online_deals", "language", "Online Deals"));

    var secondaryActions:Menu[] = [];
    secondaryActions.push(new Menu("profile", "flash_on", "My Profile"));
    secondaryActions.push(new Menu("wallet", "local_offer", "My Wallet"));
    secondaryActions.push(new Menu("orders", "flash_on", "My Orders"));
    secondaryActions.push(new Menu("recharges", "flash_on", "My Recharges"));
    secondaryActions.push(new Menu("online-orders", "flash_on", "My Online Orders"));
    secondaryActions.push(new Menu("cashbacks", "flash_on", "My Online Cashbacks"));
    this.menuList.push(primaryActions, secondaryActions);
    
  }
  
/*  filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.states;
  }*/

  clickLink(link:string){
    this.selectedLink = link;
    if(this.navopen==="true") {
      this.navopen = "false";
    }else {
      this.navopen = "true"
    }
    console.log(this.selectedLink);
    return false;
  }
  menuClicked() {
    this.navopen = "true";
  }
  sideNavClosed() {
    this.navopen = "false";
  }
}
