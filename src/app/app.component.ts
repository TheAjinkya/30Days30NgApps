import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngToDoApp';
  messageChild = ""
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

  getDataFromChild(e:any){
    console.log("Message in Parent", e)
    this.messageChild = e
  }


}
