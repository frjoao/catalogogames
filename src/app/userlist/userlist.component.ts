import { Component, OnInit } from '@angular/core';
import { Game, Cover } from '../models/game.model';
import { GammelistService } from '../service/gammelist.service';
import { AuthenticatorService } from '../service/authenticator.service';
import { User } from '../models/user.model';
import { gamesAdicionados } from '../models/gamesAdicionados.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  games: Game[]
  imgs: Cover[]
  myList: gamesAdicionados[]

  constructor(private gammelistService: GammelistService, private authService:AuthenticatorService) { }

  ngOnInit() {
    this.authService.myList(this.authService.getCurrentUser().id).subscribe(
      lista => { this.myList = lista
      });
   
  }

}
