import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../service/authenticator.service';
import { GammelistService } from '../service/gammelist.service';
import { Count, Game, Pulse } from '../models/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthenticatorService, public gammelistService: GammelistService) { }

  qntdeJogos: Count[]
  qntdeComp: Count[]
  qntdeArtes: Count[]
  qntdeEngines: Count[]
  qntdeCharacters: Count[]
  qntdeFranq: Count[]
  maisPopular: Game[]
  maisNovo: Game[]
  ultimaNoticia: Pulse[]
  ngOnInit() {

    this.gammelistService.count("games").subscribe(
      lista => { this.qntdeJogos = lista });

      this.gammelistService.getLastPulse().subscribe(
        lista => { this.ultimaNoticia = lista });

    this.gammelistService.count("companies").subscribe(
      lista => {
        this.qntdeComp = lista
      });
    this.gammelistService.count("artworks").subscribe(
      lista => {
        this.qntdeArtes = lista
      });

    this.gammelistService.count("game_engines").subscribe(
      lista => {
      this.qntdeEngines = lista
      });
      
    this.gammelistService.count("characters").subscribe(
      lista => {
      this.qntdeCharacters = lista
      });
    
      this.gammelistService.count("franchises").subscribe(
        lista => {
        this.qntdeFranq = lista
        });
    this.gammelistService.getGameByPopularity().subscribe(
      lista => {
        this.maisPopular = lista
      });
    //Recolher a data atual para fazer comparacao(existem jogos com datas de releases futuras)
    var x: number = Date.now() / 1000;
    this.gammelistService.getLastReleaseGame(x.toFixed()).subscribe(
      lista => {
        this.maisNovo = lista
      });



  }



}
