import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
  export class GithubService {
    private username: string = 'niklasravnsborg';
    private clientId: string = '2b41b3540b8ad0292fa9';
    private clientSecret: string = 'ff5056e379c3dc9318e344202c9ffe04807d531e';
    
    constructor(private http: Http) { }
    
    // fetch user information from github API
    getUser() {

      let githubUrl: string = 'https://api.github.com/users/';

      return this.http.get(githubUrl+this.username)
        .map(res => res.json());
    }

  }