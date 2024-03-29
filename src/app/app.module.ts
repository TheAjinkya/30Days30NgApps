import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { UnCompletedTasksComponent } from './un-completed-tasks/un-completed-tasks.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent,
    ContactComponent,
    QuizComponent,
    NavbarComponent,
    CompletedTasksComponent,
    UnCompletedTasksComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
