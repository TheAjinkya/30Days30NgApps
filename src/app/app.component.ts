import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}
  title = 'ngToDoApp';

  
  
  

}
