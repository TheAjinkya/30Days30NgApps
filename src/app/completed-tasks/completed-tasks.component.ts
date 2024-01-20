import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit{
 
  updatedTasks!: Observable<any[]>;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
     this.updatedTasks = this.dataService.onTaskUpdated()
    }

}
