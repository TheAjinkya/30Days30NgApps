import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/users';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MainStoreService {
  private subject = new BehaviorSubject<User[]>([]);

  sendUsers() {
    return this.subject.asObservable();
  }

  constructor(private http: HttpClient, private loggerService: LoggerService) {
    this.getAllUsers().subscribe((res) => {
      console.log(res);
      this.subject.next(res);
    });
  }

  private getAllUsers(): Observable<User[]> {
    this.loggerService.log("getAllUsers method is called!")
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  private getAllGithubUsers() {}
  
  add(num1:number, num2: number){
    const result = num1 + num2;
    this.loggerService.log("Add method is called!")
    return result
  }

  substract(num1:number, num2: number){
    const result = num1 - num2;
    this.loggerService.log("Subtract method is called!")
    return result
  }
}
