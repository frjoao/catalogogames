import { Component, OnInit } from '@angular/core';
import { Cover, Game, Genre } from '../models/game.model';
import { GammelistService } from '../service/gammelist.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  games: Game[]
  imgs: Cover[]
  gnr: Genre[]

  constructor(private gammelistService: GammelistService, private route: ActivatedRoute, private router: Router) {
    //Recarregar o componente
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // Pequena "gambiarra" para fazer recarregar o componente ao trocar o genero
        this.router.navigated = false;
        // Joga a tela para o inicial
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.gammelistService.getGamesByGenre(this.route.snapshot.params['slug']).subscribe(
      list => {
        let containsCover = list.filter(function (elem, i, array) {
          return elem.cover !== undefined;
        });
        this.games = containsCover;

      });

      this.gammelistService.getGenreNameBySlug(this.route.snapshot.params['slug']).subscribe(
        lista => { this.gnr = lista});

  }

}
