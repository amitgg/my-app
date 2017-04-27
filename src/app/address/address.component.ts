import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {
  line1: string;
  line2: string;
  pin: string;
  city: string;
  state: string;
  mobile: number;
  @Input() readOnly:boolean;

  constructor() { 
    this.line1 = 'E-201';
    this.line2 = 'Rail Vihar';
    this.pin = '201301';
    this.city = 'Noida';
    this.state = 'Uttar Pradesh';
  }

  ngOnInit() {
  }

}
