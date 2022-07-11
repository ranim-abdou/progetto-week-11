import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit {

  constructor(private http: HttpClient) { }

  Users() {
    throw new any ('users');
  }
  ngOnInit(): void { 
    this.Users()
  }
  Users(){
    console.log('chiamata')
    this.Service.authSubject.subscribe(userLogin => {
      this.http.get<ISignupData[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken})})
        (
          resp => {
            console.log(resp)
            this.users = resp;
          },
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })
  }

  }
  



