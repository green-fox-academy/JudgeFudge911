import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOverComponent } from './components/game/game-over/game-over.component';
import { GameComponent } from './components/game/game.component';
import { QuestionComponent } from './components/game/question/question.component';
import { StatisticsComponent } from './components/game/statistics/statistics.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StatisticsComponent,
    QuestionComponent,
    GameOverComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
