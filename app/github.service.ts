import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
  export class GithubService {
    private username: string = 'jrogodel';
    private clientId: string = '2b41b3540b8ad0292fa9';
    private clientSecret: string = 'ff5056e379c3dc9318e344202c9ffe04807d531e';
    
    constructor(private http: Http) { }
    
    // fetch user information from github API
    getUser() {
      return this.http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());
    }
    getRepos() {
      return this.http.get('https://api.github.com/users/'+this.username+'/repos')
       .map(res => res.json());
    }
  }