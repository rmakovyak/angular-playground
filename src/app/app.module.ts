import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './/app-routing.module';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { LeaguesService } from './leagues.service';
import { HttpClientModule } from '@angular/common/http';
import { LeagueComponent } from './league/league.component';

@NgModule({
  declarations: [AppComponent, LeaguesComponent, TeamsComponent, LeagueComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LeaguesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
