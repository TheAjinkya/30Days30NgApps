import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<User[]>{
   return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
}

