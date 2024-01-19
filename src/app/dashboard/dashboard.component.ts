import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService : DataService) {}

  taskList:any[] = [];
  counter: number = 1;
  task: any = `Task ${this.counter}`;
  selectedItem = true;
  ngOnInit(): void {}

  addTask(taskName: any) {
    this.taskList.push(taskName);
    this.counter = this.counter + 1;
    this.task = `Task ${this.counter}`;
  }

  completedTask(taskName:any){
    
  }

  deleteTask(taskName:any){
    this.taskList = this.taskList.filter(task=>task !== taskName)
  }
}
