import { Injectable } from "@angular/core";
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth {
    lock = new Auth0Lock("Client_Secret", "Domain_Name", {});
    constructor() {
        this.lock.on("authenticated", authResult => {            
            this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
                if (error) {
                    throw new Error(error);
                }
                //Set Profile
                localStorage.setItem("profile", JSON.stringify(profile));
                //Set Token
                localStorage.setItem("id_token", authResult.idToken);
            })
        });
    }

    login() {
        this.lock.show();
    }

    isAuthenticated() {
        return tokenNotExpired("id_token");
    }

    logout() {
        localStorage.removeItem("id_token");
    }

}
