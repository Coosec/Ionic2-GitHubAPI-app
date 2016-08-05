import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GetRepositories} from '../../providers/get-repositories/get-repositories';

@Component({
  templateUrl: 'build/pages/repositories/repositories.html',
  providers: [GetRepositories]
})

export class RepositoriesPage {

  repositories: any[];

  constructor(private nav: NavController, private getRepositories: GetRepositories) {
  	getRepositories
      .load()
      .then(repositories => this.repositories = repositories);
  }
}
