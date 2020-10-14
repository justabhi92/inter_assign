import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}
  createuser(user) {
    return this._http.post('http://localhost:3000/users', user);
  }
  deleteuser(user) {
    return this._http.delete('http://localhost:3000/users/' + user.id);
  }
  updateuser(input) {
    console.log(input);
    return this._http.put('http://localhost:3000/users/' + input.id, input);
  }
  getalluser() {
    return this._http.get('http://localhost:3000/users');
  }
}
