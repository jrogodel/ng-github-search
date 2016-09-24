import { Component } from '@angular/core';

import { GithubService } from '../github.service';

@Component({
  selector: 'jg-github',
  templateUrl: './app/github/github.component.html',
  styleUrls: [ './app/github/github.component.css'],
  providers: [ GithubService ]
})

export class GithubComponent {
  
  user: any = '';

  constructor(private githubService: GithubService) {
    
    // Listen to Observable
    this.githubService
        .getUser()
        .subscribe(user => this.user = user);
  }
}