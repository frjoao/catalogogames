import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../service/authenticator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthenticatorService) { }

  ngOnInit() {
  }

  
}