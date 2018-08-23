import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
