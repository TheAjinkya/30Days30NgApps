import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {
 
  updatedTasks: any[] = [];
  subscription: Subscription;

    constructor(private dataService: DataService) {
        // subscribe to home component messages
        console.log("Component loaded")
        this.subscription = this.dataService.onTaskUpdated().subscribe(tasks => {
          console.log("tasks:", tasks)
            if (tasks) {
                this.updatedTasks.push(tasks);
            } else {
                // clear messages when empty message received
                this.updatedTasks = [];
            }
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
