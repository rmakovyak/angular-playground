import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../leagues.service';
import { League } from '../league';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  constructor(private leaguesService: LeaguesService) {}

  leagues: League[];
  displayedLeagues: League[];

  ngOnInit() {
    this.getLeagues();
  }

  onFilterChange(value) {
    this.displayedLeagues = this.leagues.filter((l) =>
      l.strLeague.toLowerCase().includes(value.toLowerCase())
    );
  }

  getLeagues(): void {
    this.leaguesService.getLeagues().subscribe((response) => {
      this.leagues = response.countrys;
      this.displayedLeagues = response.countrys;
    });
  }
}
