import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconRegistry, MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AddressComponent } from './address/address.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MobileVerifyComponent } from './mobile-verify/mobile-verify.component';
import { EntryPointComponent } from './entry-point/entry-point.component';
import {appRoutes} from './app.routes';
import { RetailerInfoComponent } from './retailer-info/retailer-info.component';


export const apiPath:string = "http:localhost:8080/";

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    HeaderNavComponent,
    SideNavComponent,
    PageNotFoundComponent,
    UserInfoComponent,
    MobileVerifyComponent,
    EntryPointComponent,
    RetailerInfoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdIconModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}

