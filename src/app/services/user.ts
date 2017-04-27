import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { Location } from '@angular/common';
import { Http, RequestOptions, Headers } from "@angular/http";
import { GlobalVariable, GlobalFunctions, GlobalReadOnly } from "app/services/shared";
import { URLSearchParams } from '@angular/http';


@Injectable()
export class UserService {
    url: string;
    requestHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
    reqArgs = new RequestOptions({ headers: this.requestHeaders });
    
    constructor(private http: Http) {
    }

    validateMobile(mobile: string): Observable<any> {
        return this.observableByDelay({
            "isValid": true,
            "message": "User is valid"
        })
    }

    requestOtp(mobile: string, email: string): Observable<any> {
        return this.requestGet('otp/generateOTP', { email: email, phone: mobile });
    }

    tokenInfo(reference: string, otp: string): Observable<any> {
        return this.http.get('tokenInfo').map(response => { return response.json() });
    }

    verifyOtp(reference: number, otp: string): Observable<any> {
        return this.requestGet('otp/verifyOTP', {reference_id:reference, otp_number:otp, email:GlobalVariable.getEmail()});
    }

    registerUser(user: string) {

    }

    getCitiesByPin(pin: string): Observable<any> {
        //return this.requestGet(this.url + 'getCitiesByPin').map(response => { console.log(response); return response });
        return this.observableByDelay({ cities: ["Noida", "Greater Noida", "Okhla", "Delhi"] });

    }

    //Importan observable
    private observableByDelay(data: any): Observable<any> {
        return Observable.of(data).delay(500);
    }

    private requestGet(apiUrl: string, params): Observable<any> {
        this.reqArgs.headers.append('Auth-Token', GlobalVariable.getAuthToken());
        apiUrl = GlobalReadOnly.BASE_API_URL + apiUrl;
        return this.http.get(apiUrl + "?" + GlobalFunctions.serialize(params), this.reqArgs)
        .map(response => response.json()['response']);
    }

    private requestPost(apiUrl: string, params: any): Observable<any> {
        this.reqArgs.headers.append('Auth-Token', GlobalVariable.getAuthToken());
        apiUrl = GlobalReadOnly.BASE_API_URL + apiUrl;
        return this.http.post(apiUrl, params, this.reqArgs).map(response => response.json()['response']);
    }
}

export class User {
    email: string;
    mobile: string;
    city: string = "";
    pin: string = "";
    firstName: string;
    lastName?: string; 
    constructor(email: string) {
        this.email = email;
    }
}