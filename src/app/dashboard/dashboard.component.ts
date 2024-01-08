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

  @Output() customEvent = new EventEmitter()

  @Input("name") myName : string =""
  message:string = ""

  users: any[]= []

  taskList:any[] = [];
  counter: number = 1;
  task: any = `Task ${this.counter}`;
  selectedItem = true;
  expactDetails:boolean = false;
  ngOnInit(): void {}
  
  ngOnChnages(changes: SimpleChanges){
    console.log("changes", changes)
  }

  sendMessage(param:string){
    this.customEvent.emit(param)
    console.log(param)
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

   getData(){
    this.dataService.getUsersData().subscribe((response:any)=>{
      console.log("response", response)
      this.users = response
    })
   }  
  
}
