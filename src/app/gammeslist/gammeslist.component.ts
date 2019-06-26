import { Component, OnInit } from '@angular/core';
import { GammelistService } from '../service/gammelist.service';

import { Game } from '../models/game.model'
import { Cover } from '../models/game.model'
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-gammeslist',
  templateUrl: './gammeslist.component.html',
  styleUrls: ['./gammeslist.component.css']
})
export class GammeslistComponent implements OnInit {

  games: Game[]
  imgs: Cover[]

  constructor(private gammelistService: GammelistService) { }

  ngOnInit() {
    this.gammelistService.getAllGames().subscribe(
      list => {
        let containsCover = list.filter(function (elem, i, array) {
          return elem.cover !== undefined;
        });
        this.games = containsCover; 
      });
  }

}
