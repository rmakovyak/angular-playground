import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueComponent } from './league/league.component';

const routes: Routes = [
  { path: '', redirectTo: '/leagues', pathMatch: 'full' },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'leagues/:leagueId', component: LeagueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
