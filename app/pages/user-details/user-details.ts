import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {GetUsers} from '../../providers/get-users/get-users';

import {User} from '../../models/user';

@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
  providers: [GetUsers]
})
export class UserDetailsPage {

  user: User = new User;
  login: string;

  constructor(private nav: NavController, private navParams: NavParams, private getUsers: GetUsers) {
  	this.login = navParams.get('login');

  	getUsers.loadDetails(this.login).then(user => this.user = user);
  }

}
