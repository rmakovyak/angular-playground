import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { League } from './league';

@Injectable()
export class LeaguesService {
  constructor(private http: HttpClient) {}
  private leaguesUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?&s=Soccer';

  getLeagues() {
    return this.http.get<any>(this.leaguesUrl);
  }
}
