import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MainStoreService } from '../services/main-store.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private mainStoreService: MainStoreService) {}

  users$!: Observable<User[]>;

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.users$ = this.mainStoreService.sendUsers();
    // this.users$.subscribe((res: any) => {
    //   console.log('getAllData res data', res);
    //   return res;
    // });
  }
}
