import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { User } from '../interfaces/users';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  customEvent = new Subject<any>()

  getMessage(){
    this.customEvent.next("Message Sent")
  }

  // getUsersData(): Observable<User[]>{
  //  return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  // }
}

