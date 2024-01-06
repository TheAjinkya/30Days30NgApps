import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  @Input("name") myName : string =""

  taskList:any[] = [];
  counter: number = 1;
  task: any = `Task ${this.counter}`;
  selectedItem = true;
  expactDetails:boolean = false;
  ngOnInit(): void {}
  
  ngOnChnages(changes: SimpleChanges){
    console.log("changes", changes)
  }

  addTask(taskName: any) {
    this.taskList.push(taskName);
    this.counter = this.counter + 1;
    console.log("counter", this.counter)
    this.expactDetails = !this.expactDetails
  }
  deleteTask(taskName:any){
    this.taskList = this.taskList.filter(task=>task !== taskName)
  }
}
