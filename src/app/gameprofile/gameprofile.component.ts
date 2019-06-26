import { Component, OnInit } from '@angular/core';
/* d = new Date(unixtime); */ 
import { GammelistService } from '../service/gammelist.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game.model'
import { Cover } from '../models/game.model'
import { AuthenticatorService } from '../service/authenticator.service';

@Component({
  selector: 'app-gameprofile',
  templateUrl: './gameprofile.component.html',
  styleUrls: ['./gameprofile.component.css']
})
export class GameprofileComponent implements OnInit {


  games: Game[]
  imgs: Cover[]

  constructor(private gammelistService: GammelistService, private route: ActivatedRoute, private authService:AuthenticatorService) { }

  ngOnInit() {
    this.gammelistService.getGameBySlug(this.route.snapshot.params['slug']).subscribe(
      list => {

        let containsCover = list.filter(function (elem, i, array) {
          return elem.cover !== undefined;
        });

        this.games = containsCover;


      });
  }

  
  add(){ 
    this.authService.addGameMyList(this.games,this.authService.getCurrentUser().id).subscribe(data=>{
      console.log('INSERIDO: '+JSON.stringify(data));
      
    });
  
  }

}
