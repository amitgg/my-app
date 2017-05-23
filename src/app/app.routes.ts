
import { Routes } from "@angular/router/";
import { AddressComponent } from "app/address/address.component";
import { UserInfoComponent } from "app/user-info/user-info.component";
import { MobileVerifyComponent } from "app/mobile-verify/mobile-verify.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { EntryPointComponent } from "app/entry-point/entry-point.component";
import { RetailerInfoComponent } from "app/retailer-info/retailer-info.component";
import { AppComponent } from "app/app.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'address', component: AddressComponent },
  { path: 'deals', component: AddressComponent },
  { path: 'offers', component: AddressComponent },
  { path: 'recharge', component: AddressComponent },
  { path: 'online-deals', component: AddressComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'entry-point/:token', component: EntryPointComponent },
  { path: 'mobile-verify', component: MobileVerifyComponent },
  { path : 'retailer-info', component: RetailerInfoComponent},
  { path: '**', component: PageNotFoundComponent }
  

]