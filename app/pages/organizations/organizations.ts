import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GetOrganizations} from '../../providers/get-organizations/get-organizations';

@Component({
  templateUrl: 'build/pages/organizations/organizations.html',
  providers: [GetOrganizations]
})
export class OrganizationsPage {

  organizations: any[];

  constructor(private nav: NavController, private getOrganizations: GetOrganizations) {
    getOrganizations
      .load()
      .then(organizations => this.organizations = organizations);
  }

}
