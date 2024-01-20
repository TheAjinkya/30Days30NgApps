import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private dataService: DataService) {}

  users$!: Observable<User[]>;

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.users$ = this.dataService.getUsersData();
    this.users$.subscribe((res: any) => {
      console.log('getAllData res data', res);
      return res;
    });
  }
}
