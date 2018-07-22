import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { QuestionsComponent } from './questions/questions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionService } from './question.service';
import { QuestionFormComponent } from './questions/question-form/question-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: 'game', component: GameComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, GameComponent, QuestionsComponent, PageNotFoundComponent, QuestionFormComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
