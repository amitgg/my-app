import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { GlobalVariable } from '../services/shared';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css']
})
export class EntryPointComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      GlobalVariable.setAuthToken(params['token']);
      GlobalVariable.setEmail(params['email']);
    });
  }
}