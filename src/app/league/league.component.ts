import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from '../leagues.service';
import { League } from '../league';
import { Team } from '../team';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private leagueService: LeaguesService
  ) {}

  league: League;
  teams: Team[];
  displayedTeams: Team[];

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.leagueService
      .getLeague(id)
      .subscribe((response) => (this.league = response.leagues[0]));
    this.leagueService.getLeagueTeams(id).subscribe((response) => {
      this.teams = response.teams;
      this.displayedTeams = response.teams;
    });
  }

  onFilterChange(value) {
    this.displayedTeams = this.teams.filter((t) =>
      t.strTeam.toLowerCase().includes(value.toLowerCase())
    );
  }
}
