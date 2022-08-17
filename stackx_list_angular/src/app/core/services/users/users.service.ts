//

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(quantityUsers: string) : Observable<any> {
    return this.http.get(`${environment.userApiUrl}?results=${quantityUsers}`);
  }

}
