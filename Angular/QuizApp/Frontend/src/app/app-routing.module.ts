import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { GameComponent } from './components/game/game.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
