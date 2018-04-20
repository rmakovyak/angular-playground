import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../player';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit {
  constructor(private playersService: PlayersService) {}

  private _teamId: string;
  players: Player[];
  photoPlaceholder: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder.svg';

  get teamId(): string {
    return this._teamId;
  }

  @Input()
  set teamId(teamId: string) {
    if (teamId) {
      this.playersService
        .getPlayersByTeamId(teamId)
        .subscribe((response) => (this.players = response.player));
      this._teamId = name;
    }
  }

  ngOnInit() {}
}
