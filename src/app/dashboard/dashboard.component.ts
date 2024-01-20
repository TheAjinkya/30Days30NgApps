import {
  Component,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {
  }

  taskList: any[] = [];
  counter: number = 1;
  task: any = `Task ${this.counter}`;
  selectedItem = true;
  selectedTaskName: any;
  completedTaskList: any[] = [];
  selectedValue: boolean = false;

  message: Subscription = new Subscription();

  ngOnInit(): void {
    this.message = this.dataService.customEvent.subscribe((res) => {
      console.log('Response', res);
    });
  }

  addTask(taskName: any) {
    this.taskList.push(taskName);
    this.counter = this.counter + 1;
    this.task = `Task ${this.counter}`;
    this.dataService.getMessage()
  }

  completedTask(taskName: any) {
    this.selectedTaskName = taskName;
    if (!this.completedTaskList.includes(taskName)) {
      this.completedTaskList.push(taskName);
    }
  }

  getCustomCss(taskName: any) {
    console.log('completedTaskList', this.completedTaskList);
    if (this.completedTaskList.includes(taskName)) {
      return 'completedTask';
    } else {
      return '';
    }
  }

  deleteTask(taskName: any) {
    this.taskList = this.taskList.filter((task) => task !== taskName);
  }
}
