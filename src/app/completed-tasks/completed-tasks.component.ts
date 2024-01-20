import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit {
  message:any
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.message = this.dataService.customEvent.subscribe((res) => {
      console.log('Response', res);
    });
  }

}
