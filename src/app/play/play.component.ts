/* Developer: Niveditha K*/
/* Created Date: 06/05/2019*/
/* Component Name: Play*/
/* Purpose: take input from the userTo display the table*/

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GameCity } from '../model/gamecity.model';
import { GamecityService } from '../service/gamecity.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  game: GameCity[];
  constructor(private gamecityservice: GamecityService, private router: Router) { }
  ngOnInit() {
    this.gamecityservice.getGameList()
      .subscribe((data: GameCity[]) => {
      this.game = data;
      });
  }

}
