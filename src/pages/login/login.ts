import { Component } from "@angular/core";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
    selector: "login",
    templateUrl: "login.html"
})

export class LoginPage {
    constructor(private fb: Facebook) { }
}

this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);