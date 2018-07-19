import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { QuestionsComponent } from './questions/questions.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'game' , component: GameComponent},
  {path: 'questions' , component: QuestionsComponent},
  {path: '**' , component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    QuestionsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
