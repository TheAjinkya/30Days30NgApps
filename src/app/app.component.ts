import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngToDoApp';
  isDisabled = true;
  isStyled= true;
  redHeading = "heading-red"
  isItalic = true;
  messageClasses = {
    "heading-yellow": true,
    "text-italic": true
  }
  messageStyles ={
    "color": 'pink'
  }

  hightLightColor = 'blue'


}
