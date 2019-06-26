import { Component, OnInit } from '@angular/core';
import { Cover, Game, Genre, Company } from '../models/game.model';
import { GammelistService } from '../service/gammelist.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.css']
})
export class CompanysComponent implements OnInit {

  games: Game[]
  comp: Game[]

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
    this.gammelistService.getGamesByCompany(this.route.snapshot.params['slug']).subscribe(
      list => {
        let containsCover = list.filter(function (elem, i, array) {
          return elem.cover !== undefined;
        });
        this.games = containsCover;

      });
    this.gammelistService.getCompanyNameBySlug(this.route.snapshot.params['slug']).subscribe(
      lista => { this.comp = lista});
  }

}

