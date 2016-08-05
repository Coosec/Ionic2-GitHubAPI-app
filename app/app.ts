import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {UsersPage} from './pages/users/users';
import {RepositoriesPage} from './pages/repositories/repositories';
import {OrganizationsPage} from './pages/organizations/organizations';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private rootPage: any;
  private pages: Array<{name: string, ref: any}>;

  constructor(private platform: Platform, private menu: MenuController) {
    this.rootPage = UsersPage;

    this.pages = [
      { name: 'Users', ref: UsersPage },
      { name: 'Repositories', ref: RepositoriesPage },
      { name: 'Organizations', ref: OrganizationsPage }
    ];

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  changePage(page) {
    this.menu.close();
    this.nav.setRoot(page.ref)
  }
}

ionicBootstrap(MyApp);
