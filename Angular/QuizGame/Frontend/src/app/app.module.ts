import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { StatisticsComponent } from './components/game/statistics/statistics.component';
import { QuestionComponent } from './components/game/question/question.component';
import { GameOverComponent } from './components/game/game-over/game-over.component';
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
