import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [{path:'', component: DashboardComponent},
{path:'news', component: NewsComponent},
{path:'quiz', component: QuizComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
