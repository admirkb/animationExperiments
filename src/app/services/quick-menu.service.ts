import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class QuickMenuService {

  constructor(private http: Http) {


  }



  public hello() {

    return "Hello2";
  }


}
