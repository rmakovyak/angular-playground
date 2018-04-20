import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { League } from './league';

@Injectable()
export class LeaguesService {
  constructor(private http: HttpClient) {}
  private leaguesUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?&s=Soccer';
  private leagueUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';
  private teamsUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=';

  getLeagues() {
    return this.http.get<any>(this.leaguesUrl);
  }

  getLeague(id) {
    return this.http.get<any>(`${this.leagueUrl}${id}`);
  }

  getLeagueTeams(id) {
    return this.http.get<any>(`${this.teamsUrl}${id}`);
  }
}
