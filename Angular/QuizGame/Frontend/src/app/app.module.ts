import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOverComponent } from './components/game/game-over/game-over.component';
import { GameComponent } from './components/game/game.component';
import { StatisticsComponent } from './components/game/statistics/statistics.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionService } from './services/question.service';
import { CurrentQuestionComponent } from './components/game/currentQuestion/currentQuestion.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { QuestionManagerComponent } from './components/questions/question-manager/question-manager.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StatisticsComponent,
    CurrentQuestionComponent,
    GameOverComponent,
    NotFoundComponent,
    QuestionComponent,
    QuestionManagerComponent,
    QuestionsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
