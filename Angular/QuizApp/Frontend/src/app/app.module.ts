import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GameComponent } from './components/game/game.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { StatsComponent } from './components/game/stats/stats.component';
import { CurrentQuestionComponent } from './components/game/current-question/current-question.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { EditQuestionComponent } from './components/questions/edit-question/edit-question.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { GameOverComponent } from './components/game/game-over/game-over.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    GameComponent,
    QuestionsComponent,
    StatsComponent,
    CurrentQuestionComponent,
    QuestionComponent,
    EditQuestionComponent,
    AddQuestionComponent,
    GameOverComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
