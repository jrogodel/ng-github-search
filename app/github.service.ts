import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
  export class GithubService {
    private username: string = 'jrogodel';
    private clientId: string = '2b41b3540b8ad0292fa9';
    private clientSecret: string = 'ff5056e379c3dc9318e344202c9ffe04807d531e';
    
    constructor(private _http: Http) {
      console.log("github service connected...")
    }
  }


// TODO
// fetch user information through this service