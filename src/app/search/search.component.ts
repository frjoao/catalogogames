import { Component, OnInit } from '@angular/core';
import { GammelistService } from '../service/gammelist.service';
import { Cover, Game, Genre } from '../models/game.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  q = ""
  
  games: Game[]

 constructor(private gammelistService: GammelistService) { }

  ngOnInit() {
    
  } 

  pesquisar(){
    this.gammelistService.getGamesBySearch(this.q).subscribe(
      list => {
        let containsCover = list.filter(function (elem, i, array) {
          return elem.cover !== undefined;
        });
        this.games = containsCover;

      });
  }

}
