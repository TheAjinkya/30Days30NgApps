import {
  Component,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  taskList: any[] = [];
  counter: number = 1;
  task: any = `Task ${this.counter}`;
  selectedItem = true;
  selectedTaskName: any;
  completedTaskList: any[] = [];
  selectedValue: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.updateTaskList();
    console.log('taskList', this.taskList);
  }

  updateTaskList() {
    var items = localStorage.getItem('taskList');
    if (items !== null) {
      console.log('items', JSON.parse(items));
      this.taskList = JSON.parse(items);
    } else {
      this.taskList.length = 0;
    }
  }

  addTask(taskName: any) {
    this.taskList.push(taskName);
    this.counter = this.counter + 1;
    this.task = `Task ${this.counter}`;
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    console.log('localStorage', localStorage);
  }

  deleteAll() {
    localStorage.clear();
    this.updateTaskList();
  }

  clearMessage() {
    this.dataService.clearMessage();
  }

  completedTask(taskName: any) {
    this.selectedTaskName = taskName;
    if (!this.completedTaskList.includes(taskName)) {
      this.completedTaskList.push(taskName);
      this.dataService.sendCompletedTasks(this.completedTaskList);
    }
  }

  getCustomCss(taskName: any) {
    if (this.completedTaskList.includes(taskName)) {
      return 'completedTask';
    } else {
      return '';
    }
  }

  deleteTask(taskName: any) {
    this.taskList = this.taskList.filter((task) => task !== taskName);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }
}
