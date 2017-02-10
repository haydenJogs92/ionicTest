import { Injectable, NgZone } from '@angular/core';
import {Http, Headers} from '@angular/http';



@Injectable()
export class twitterAPI{


  //https://dev.twitter.com/rest/reference/get/account/verify_credentials
  private twitterUrl: string = '';


  constructor(public http: Http){}



  getTweets(){
    let creds = ''
    //this.http.post
  }


}
