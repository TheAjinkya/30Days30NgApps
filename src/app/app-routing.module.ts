import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { QuizComponent } from './quiz/quiz.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { UnCompletedTasksComponent } from './un-completed-tasks/un-completed-tasks.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path:'', component: DashboardComponent},
{path:'news', component: NewsComponent},
{path:'completed', component: CompletedTasksComponent},
{path:'users', component: ContactComponent},
{path:'uncomplete', component: UnCompletedTasksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
