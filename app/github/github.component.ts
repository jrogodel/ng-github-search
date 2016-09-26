import { Component } from '@angular/core';

import { GithubService } from '../github.service';

@Component({
  selector: 'jg-github',
  templateUrl: './app/github/github.component.html',
  styleUrls: [ './app/github/github.component.css'],
  providers: [ GithubService ]
})

export class GithubComponent {
  
  user: any;
  repos: any;
  username: string;

  constructor(private githubService: GithubService) {
    console.log("Github Component Connected...")
  }

  search() {

    this.githubService.updateUsername(this.username);

    // Listen to Observable
    this.githubService
        .getUser()
        .subscribe(user => this.user = user);
      
    this.githubService
        .getRepos()
        .subscribe(repos => this.repos = repos);
  }

  }
}