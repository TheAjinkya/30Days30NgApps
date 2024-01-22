import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class MainStoreService {
  private subject = new BehaviorSubject<User[]>([]);

  sendUsers() {
    return this.subject.asObservable();
  }

  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe((res) => {
      console.log(res);
      this.subject.next(res);
    });
  }

  private getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  private getAllGithubUsers() {}
}
