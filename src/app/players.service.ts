import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  constructor(private http: HttpClient) {}
  private url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=';

  getPlayersByTeamId(id) {
    return this.http.get<any>(`${this.url}${id}`);
  }
}
