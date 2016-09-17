import { Component } from '@angular/core';

import { GithubService } from '../github.service';

@Component({
  selector: 'jg-github',
  templateUrl: './app/github/github.component.html',
  styleUrls: [ './app/github/github.component.css'],
  providers: [ GithubService ]
})


export class GithubComponent {
  constructor(private _githubService: GithubService) {
    console.log("github component connected...")
  }
}