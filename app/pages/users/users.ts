import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {GetUsers} from '../../providers/get-users/get-users';

import {User} from '../../models/user';

import {UserDetailsPage} from '../user-details/user-details';

@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GetUsers]
})

export class UsersPage {

  users: User[];

  constructor(private nav: NavController, private getUsers: GetUsers) {
  	getUsers
      .load()
      .then(users => this.users = users);
  }

  goToDetails(login) {
    this.nav.push(UserDetailsPage, {
      login: login
    });
  }
}
