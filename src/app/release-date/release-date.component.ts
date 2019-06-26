import { Component, OnInit } from '@angular/core';
import { Cover, Game, Genre, Company } from '../models/game.model';
import { GammelistService } from '../service/gammelist.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.css']
})
export class ReleaseDateComponent implements OnInit {

  games: Game[]

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
    var releaseDate:string = '';
    var tituloDate:string = ''; //  Terminar depois de fazer, titulo para aparecer na pagina.

    if (this.route.snapshot.params['data'] == '2015') {
      releaseDate = 'first_release_date > 1420070400;'
    } else if (this.route.snapshot.params['data'] == '2005_2010'){
      releaseDate = 'first_release_date > 1104537600 & first_release_date < 1262304000;'
    } else if (this.route.snapshot.params['data'] == '2010_2015'){
      releaseDate = 'first_release_date > 1262304000 & first_release_date < 1420070400;'
    } else if (this.route.snapshot.params['data'] == '2005'){
      releaseDate = 'first_release_date < 1104537600;'
    }

     this.gammelistService.getGamesByReleaseDate(releaseDate).subscribe(
       list => {
         let containsCover = list.filter(function (elem, i, array) {
           return elem.cover !== undefined;
         });
         this.games = containsCover;

       });
  }

}

